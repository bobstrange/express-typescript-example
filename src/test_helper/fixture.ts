
import FS from 'fs'
import Path from "path";
const fixtureDir = Path.resolve(process.cwd(), "fixtures");

export const saveFixture = async (filename: string, data: any): Promise<void> => {
  const path = Path.resolve(fixtureDir, filename);
  await FS.promises.writeFile(path, JSON.stringify(data));
};

export const loadFixture = async (filename: string): Promise<any> => {
  const path = Path.resolve(fixtureDir, filename);
  return JSON.parse(await FS.promises.readFile(path, "utf-8"));
};
