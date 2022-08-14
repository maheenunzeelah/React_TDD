import { render, screen } from '@testing-library/react';
import App from '../App';
import renderer from 'react-test-renderer'
describe("Testing",()=>{
  test("renders",()=>{
    // let app=renderer.create(<App />);
    // app=app.toJSON();
    const {container}=render(<App/>)
    expect(container).toMatchSnapshot();
  })
})