import { Injectable } from '@nestjs/common';

@Injectable()
export class UuidService {
  async generateUniqueUid(length: number): Promise<string> {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uid: string;
    let isUnique = false;

    while (!isUnique) {
      uid = '';
      for (let i = 0; i < length; i++) {
        uid += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      isUnique = await this.isUidUnique(uid);
    }

    return uid;
  }

  // Hàm kiểm tra tính duy nhất của UID
  private async isUidUnique(uid: string): Promise<boolean> {
    // Logic kiểm tra tính duy nhất của UID
    return true;
  }
}
