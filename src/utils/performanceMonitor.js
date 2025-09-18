// Simple performance monitoring utility
export const PerformanceMonitor = {
  startTimes: {},
  
  start(name) {
    this.startTimes[name] = performance.now();
  },
  
  end(name) {
    const endTime = performance.now();
    const startTime = this.startTimes[name];
    if (startTime) {
      const duration = endTime - startTime;
      console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
      return duration;
    }
    return 0;
  },
  
  measureComponentLoad(componentName) {
    this.start(componentName);
    return () => this.end(componentName);
  }
};

// Usage example:
// const endMeasurement = PerformanceMonitor.measureComponentLoad('Projects');
// // ... component loads
// endMeasurement();

export default PerformanceMonitor;
