import path from 'path';
import JsonDb from 'src/common/libs/jsonDb';
import { runtimeDataPath } from 'src/common/paths.app';
import { version, defaultValue, versionFixer } from './schema';
import { consoleLog } from 'src/common/utils/dev';

const dbInstance = new JsonDb({
  file: path.resolve(runtimeDataPath, 'db/main.json'),
  backup: {
    dir: path.resolve(runtimeDataPath, 'db/main_backup'),
    cronExp: '*/30 * * * *',
    maxBackups: 3,
  },
  version,
  defaultValue,
  versionFixer,
});
consoleLog('Database initialized.', 'db');
export default function db() {
  return dbInstance;
}
