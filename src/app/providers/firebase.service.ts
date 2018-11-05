import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseObject } from '../models/firebase-interface';
/**
 * This provider FirebaseSerivce is responsible for CRUD with firebase;
 * 
 * - for starting connection call method start
 * 
 * @author Silva Neto
 * @version 0.0.1
 */
@Injectable()
export class FirebaseService<T extends FirebaseObject> {

  private uri: string;
  public loading: boolean;
  private items: AngularFireList<T>;

  constructor(private bd: AngularFireDatabase) { }

  /**
   * @param uri path relative to the data
   */
  start(uri: string): AngularFireList<T> {
    if (uri.trim().length > 0) {
      this.uri = uri;
      this.items = this.bd.list(this.uri);
      return this.bd.list(this.uri);
    }
  }

  get(key: string) {
    return this.bd.object(`${this.uri}/${key}`);
  }

  /**
   * @param arg 
   */
  add(arg: T) {
    this.validateConection();
    return this.items.push(arg);
  }

  /**
   * 
   * @param key 
   * @param arg 
   */
  update(arg: T) {
    this.validateConection();
    return this.items.update(arg.key, arg);
  }

  /**
   * Delete an object from the passed key as a parameter if the key is valid.
   * 
   * @param key do tipo string.
   */
  delete(key: string) {
    this.validateConection();
    return key ? this.items.remove(key) : undefined;
  }

  /**
   * Validate connection
   */
  private validateConection() {
    if (!this.uri || this.uri.trim().length == 0 || !this.items) throw new Error('CONECTION URI IS INVALID - FIREBASE SERVICE');
  }
  
}