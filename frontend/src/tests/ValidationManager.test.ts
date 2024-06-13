import { ValidationManager } from "../manager/ValidationManager";

it("ValidationManager should escape HTML entities", () => {
  // Arrange
  // & < > " ' \ \\
  let input = "& < > \" ' \\ \\\\ `";
  const validationManger = new ValidationManager();
  //Act
  input = validationManger.validate(input);
  //Assert
  expect(input).toBe("&amp; &lt; &gt; &quot; &#x27; &#x5C; &#x5C;&#x5C; &#96;");
});

it("ValidationManager should remove characters not included in whitelist", () => {
  // Arrange
  let input = "valide: 123 Was ist Ökologie?; invalide: §%=";
  const validationManger = new ValidationManager();
  // Act
  input = validationManger.validate(input);
  // Assert
  expect(input).toBe("valide: 123 Was ist Ökologie?; invalide: ");
});
