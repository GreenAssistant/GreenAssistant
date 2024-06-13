from api.manager import validation_manager


class TestValidationManager:
    def test_filter(self):
        custom_input = "valide: 123 Was ist Ökologie?; invalide: §%="
        assert validation_manager.validate(custom_input) == "valide: 123 Was ist Ökologie?; invalide: "

    def test_length(self):
        custom_input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis"
        assert len(validation_manager.validate(custom_input)) == 300
