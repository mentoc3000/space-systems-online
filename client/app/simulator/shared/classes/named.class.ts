export class Named {
  private name: string;

  public setName( newName: string ): void {
    this.name = newName;
  };

  public getName( ): string {
    if (!this.name) {
      this.name = '';
    }
    return this.name;
  }

  public deleteName(): void {
    this.name = '';
  }
};
