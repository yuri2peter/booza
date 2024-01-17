import { USE_ELECTRON, USE_WEB_SERVER } from 'src/common/config';
import prepares from './prepares';
import startWeb from './web/startWeb';
import startElectron from './electron/startElectron';
import { fileLog } from './utils/log';

async function main() {
  prepares();
  fileLog('Server start.');

  let port = 0;
  if (USE_WEB_SERVER) {
    port = await startWeb();
  }
  if (USE_ELECTRON) {
    await startElectron(port);
  }
}

main();
