import re

def validate(input: str) -> str :
  validInput = _filter(_check_length(input))
  return validInput
  
def _filter(input: str) -> str :
  whitelist = "[^\\w\\söÖäÄüÜ0-9?!():&.,;#]"
  validInput = re.sub(whitelist, "", input)
  return validInput

def _check_length(input: str) -> str :
  if len(input) <= 300:
    return input
  return input[0:301]
  
# if __name__ == "__main__":
#   input = "11 hello there <script> lsldsl </script> ^^!"
#   val = validate(input)
#   print(val)