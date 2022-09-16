export class Client {
  static current_client: Client;

  constructor() {
    Client.current_client = this;
  }
  test = false;

}
