import KeyFigure, {
  KEY_FIGURE_MODE_ADD,
  KEY_FIGURE_METHOD_TIME,
  KEY_FIGURE_METHOD_COUNT,
  KEY_FIGURE_METHOD_OBSERVER,
} from './keyFigure';

/**
 * Benchmark controller.
 */
class BenchmarkController {
  /**
   * Init
   */
  constructor() {
    this.keyFigures = {};

    // Redux key figures.
    this.addKeyFigure(
      'ActionCount',
      new KeyFigure(KEY_FIGURE_MODE_ADD, KEY_FIGURE_METHOD_COUNT)
    );
    this.addKeyFigure(
      'ActionTime',
      new KeyFigure(KEY_FIGURE_MODE_ADD, KEY_FIGURE_METHOD_TIME)
    );
    this.addKeyFigure(
      'ActionEvents',
      new KeyFigure(KEY_FIGURE_MODE_ADD, KEY_FIGURE_METHOD_OBSERVER)
    );
    this.addKeyFigure(
      'GlobalEvents',
      new KeyFigure(KEY_FIGURE_MODE_ADD, KEY_FIGURE_METHOD_OBSERVER)
    );
    this.getKeyFigure('GlobalEvents').startMeasure('global');
  }

  /**
   * Adds a key figure.
   * @param {string} name Name
   * @param {KeyFigure} keyFigure KeyFigure
   */
  addKeyFigure(name, keyFigure) {
    this.keyFigures[name] = keyFigure;
  }

  /**
   * Gets a key figure.
   * @param {string} name Name
   * @param {KeyFigure} keyfigure KeyFigure
   * @returns {Object}
   */
  getKeyFigure(name) {
    return this.keyFigures[name];
  }

  /**
   * Benchmark debug log;
   */
  debug() {
    console.log('=========================');
    console.log('Benchmark Debug Log');
    console.log('=========================');
    console.log(this.keyFigures);
  }

  /**
   * Prints most called actions.
   */
  printMostCalledActions() {
    // Most called actions.
    const { measure } = this.getKeyFigure('ActionCount');
    const actions = Object.keys(measure.inclusive);
    const sortedAction = actions.sort((actionA, actionB) => {
      const measureA = measure.inclusive[actionA];
      const measureB = measure.inclusive[actionB];

      if (measureA < measureB) {
        return -1;
      }
      if (measureA > measureB) {
        return 1;
      }
      return 0;
    });

    console.log('%cMost called actions', 'font-size: 24px; margin-bottom: 12px;');
    console.table(sortedAction
      .map(action => ({
        Action: action,
        Count: measure.inclusive[action],
      }))
      .reverse()
      .slice(0, 10));
  }

  /**
   * Prints the highest execution time per action on average.
   * @param {string} type "inclusive" or "exclusive"
   */
  printHighestAverageAction(type = 'inclusive') {
    // Highest average execution time
    const { measure } = this.getKeyFigure('ActionTime');
    const { measure: measureCount } = this.getKeyFigure('ActionCount');

    const actions = Object.keys(measure[type]);
    const sortedAction = actions.sort((actionA, actionB) => {
      const measureA = measure[type][actionA] / measureCount[type][actionA];
      const measureB = measure[type][actionB] / measureCount[type][actionB];

      if (measureA < measureB) {
        return -1;
      }
      if (measureA > measureB) {
        return 1;
      }
      return 0;
    });

    console.log(`%cHighest average execution time (${type})`, 'font-size: 24px; margin-top: 32px; margin-bottom: 12px;');
    console.table(sortedAction
      .map(action => ({
        Action: action,
        Time: measure[type][action] / measureCount[type][action],
      }))
      .reverse()
      .slice(0, 10));
  }

  /**
   * Prints most rendering actions.
   */
  printsActionsWithMostRenders() {
    const measure = this.getKeyFigure('ActionEvents').measure.inclusive;
    const actions = Object.keys(measure)
      .map(action => Object.keys(measure[action]).reduce((acc, current) => ({
        action,
        render: measure[action][current].render + acc.render,
        renderTime: measure[action][current].renderTime + acc.renderTime,
      }), { action, render: 0, renderTime: 0 }));

    const sortedAction = actions.sort((actionA, actionB) => {
      const measureA = actionA.render;
      const measureB = actionB.render;

      if (measureA < measureB) {
        return -1;
      }
      if (measureA > measureB) {
        return 1;
      }
      return 0;
    });

    console.log('%cAction that caused most renders', 'font-size: 24px; margin-top: 32px; margin-bottom: 12px;');
    console.table(sortedAction
      .map(action => ({
        Action: action.action,
        Renders: action.render,
        SumRenderTime: action.renderTime,
        AvgRenderTime: action.render > 0 ? action.renderTime / action.render : 0,
      }))
      .reverse()
      .slice(0, 10), ['Action', 'Renders', 'SumRenderTime', 'AvgRenderTime']);
  }

  /**
   * Prints the most rendering components.
   */
  printsMostRenderedComponents() {
    const measure = this.getKeyFigure('GlobalEvents').measure.inclusive;
    const result = [];

    Object.keys(measure)
      .forEach(action => Object.keys(measure[action])
        .forEach((component) => {
          const found = result.find(r => r.name === component);
          if (found) {
            found.render += measure[action][component].render;
            found.renderTime += measure[action][component].renderTime;
            return;
          }

          result.push({
            name: component,
            render: measure[action][component].render,
            renderTime: measure[action][component].renderTime,
          });
        }));

    const sortedAction = result.sort((actionA, actionB) => {
      const measureA = actionA.render;
      const measureB = actionB.render;

      if (measureA < measureB) {
        return -1;
      }
      if (measureA > measureB) {
        return 1;
      }
      return 0;
    });

    console.log('%cMost rendered Components', 'font-size: 24px; margin-top: 32px; margin-bottom: 12px;');
    console.table(sortedAction
      .map(action => ({
        Component: action.name,
        Renders: action.render,
        SumRenderTime: action.renderTime,
        AvgRenderTime: action.render > 0 ? action.renderTime / action.render : 0,
      }))
      .reverse()
      .slice(0, 10), ['Component', 'Renders', 'SumRenderTime', 'AvgRenderTime']);
  }

  /**
   * Prints summary.
   */
  printTotals() {
    const measure = this.getKeyFigure('GlobalEvents').measure.inclusive;
    const result = [];

    Object.keys(measure)
      .forEach(action => Object.keys(measure[action])
        .forEach((component) => {
          const found = result.find(r => r.name === component);
          if (found) {
            found.render += measure[action][component].render;
            found.renderTime += measure[action][component].renderTime;
            return;
          }

          result.push({
            name: component,
            render: measure[action][component].render,
            renderTime: measure[action][component].renderTime,
          });
        }));

    const sumRenders = result.reduce((current, acc) => current + acc.render, 0);
    const sumRenderTime = result.reduce((current, acc) => current + acc.renderTime, 0);
    const avgRenderTime = sumRenderTime / sumRenders;

    console.log('%cRender total', 'font-size: 24px; margin-top: 32px; margin-bottom: 12px;');
    console.log(`%cRenders: ${sumRenders}; Execution Time: ${sumRenderTime}ms; Average Execution Time: ${avgRenderTime}ms`, 'font-size: 16px; margin-bottom: 12px;');
  }

  /**
   * Pretty prints result.
   */
  print() {
    const globalEvents = this.getKeyFigure('GlobalEvents');
    if (globalEvents.started) {
      this.getKeyFigure('GlobalEvents').stopMeasure('global');
    }

    this.printMostCalledActions();
    this.printHighestAverageAction();
    this.printsActionsWithMostRenders();
    this.printsMostRenderedComponents();
    this.printTotals();
  }

  /**
   * Starts benchmarking all key figures.
   */
  startAll() {
    this.keyFigures.forEach(keyFigure => keyFigure.setStarted(true));
    this.getKeyFigure('GlobalEvents').startMeasure('global');
  }

  /**
   * Stops benchmarking all key figures.
   */
  stopAll() {
    this.getKeyFigure('GlobalEvents').stopMeasure('global');
    this.keyFigures.forEach(keyFigure => keyFigure.setStarted(false));
  }
}

window.benchmark = new BenchmarkController();
export default window.benchmark;
