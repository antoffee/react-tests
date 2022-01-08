import renderer, { act } from "react-test-renderer";
import { Link } from "./Link";

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    if (tree && !Array.isArray(tree)) {
      tree.props.onMouseEnter();
    }
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manuaIlly trigger the callback
  act(() => {
    if (tree && !Array.isArray(tree)) {
      tree.props.onMouseLeave();
    }
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
