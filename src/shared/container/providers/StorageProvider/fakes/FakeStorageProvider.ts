import IStorageProvider from '../models/IStorageProvider';

export default class FakeStorageProvider implements IStorageProvider {
  private files: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.files.push(file);
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    this.files = this.files.filter(item => item !== file);
    /*
     const findIndex = this.files.findIndex(item => item === file);

     this.files.splice(findIndex, 1);
     */
  }
}
