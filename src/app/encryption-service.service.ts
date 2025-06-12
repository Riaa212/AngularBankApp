import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';



@Injectable({
  providedIn: 'root'
})
export class EncryptionServiceService {

  constructor() { 

  }
   private key = CryptoJS.enc.Utf8.parse('1234567890123456'); // 16-char key
  private iv = CryptoJS.enc.Utf8.parse('abcdefghijklmnop');   // 16-char IV

    encrypt(data: string): string {
    const encrypted = CryptoJS.AES.encrypt(data, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  decrypt(encrypted: string): string {
    const decrypted = CryptoJS.AES.decrypt(encrypted, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  
}
