// Quick test to verify the script can run
const DocAggregator = require('./fetch-docs.js');
const aggregator = new DocAggregator('./config.json');
console.log('Output directory:', aggregator.outputDir);
console.log('Config loaded:', aggregator.config.sites.length, 'sites');
aggregator.run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

