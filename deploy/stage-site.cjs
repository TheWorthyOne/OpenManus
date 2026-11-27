const { copyFileSync, mkdirSync, readdirSync, rmSync } = require('node:fs');
const { join } = require('node:path');

const source = join(__dirname, '..');
const output = join(__dirname, 'dist');

rmSync(output, { recursive: true, force: true });
mkdirSync(join(output, 'icons'), { recursive: true });

for (const file of ['index.html', 'manifest.json', 'service-worker.js', 'browserconfig.xml']) {
  copyFileSync(join(source, file), join(output, file));
}

for (const icon of readdirSync(join(source, 'icons'))) {
  if (icon.endsWith('.png')) {
    copyFileSync(join(source, 'icons', icon), join(output, 'icons', icon));
  }
}
