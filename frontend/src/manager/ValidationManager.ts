export class ValidationManager {
  validate(input: string): string {
    let validInput = this.escape(input);
    validInput = this.filter(validInput);
    return validInput;
  }

  /**
   * HTML Character Entities (case sensitive -> g):
   *  & 	&amp; 	
   *  < 	&lt; 	
   *  > 	&gt; 	
   *  " 	&quot; 	
   *  ' 	&apos; 	
   * @param input
   * @returns escaped / sanitized string
   */
  private escape(input: string): string {
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;")
      .replace(/\\/g, "&#x5C;")
      .replace(/`/g, "&#96;");
  }

  private filter(input: string): string {
    const whitelist = new RegExp("[^\\w\\söÖäÄüÜ?!():&.,;#]", "g");
    return input.replace(whitelist, "");
  }
}
