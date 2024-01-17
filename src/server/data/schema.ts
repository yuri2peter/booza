import { DataVersionFixer } from 'src/common/libs/jsonDb';
import { consoleLog } from 'src/common/utils/dev';

export const version = 1;
export const defaultValue = {};
export type Data = typeof defaultValue;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const versionFixer: DataVersionFixer = (record, changeData) => {
  if (record.version !== version) {
    consoleLog(
      `Data schema version ${record.version} should be ${version}.`,
      'db'
    );
    // changeData(d => {})
    consoleLog('Data schema version fixed.', 'db');
  }
};
