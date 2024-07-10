import path from 'path';
import JsonDb from 'src/common/libs/jsonDb';
import { runtimeDataPath } from 'src/common/paths.app';
import { DataSchema, defaultValue } from 'src/common/type/data';
import { consoleLog } from 'src/common/utils/dev';

const dbInstance = new JsonDb({
  file: path.resolve(runtimeDataPath, 'db/main.json'),
  backup: {
    dir: path.resolve(runtimeDataPath, 'db/main_backup'),
    cronExp: '*/30 * * * *',
    maxBackups: 3,
  },
  defaultValue,
  onLoad: (get, set) => {
    // Schema fix
    set(DataSchema.parse(get()));
    // const data = get();
    // Other fixes...
  },
});
consoleLog('Database initialized.', 'db');
export default function db() {
  return dbInstance;
}
