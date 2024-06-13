class TestDemoClass:
    def test_one(self):
        x = "this"
        assert "h" in x

    # test is meant to fail!
    # def test_two(self):
    #     x = "hello"
    #     assert hasattr(x, "hello")