import { render, screen,wait } from '@testing-library/react';
import FollowersList from '../FollowersList';
import {BrowserRouter} from 'react-router-dom';
const MockFollowersList=()=>{
    return <BrowserRouter>
    <FollowersList />
    </BrowserRouter>
}
describe("FollowersList",()=>{
  beforeEach(()=>{
    console.log("RUNNING BEFORE EACH TEST")
  })
  it('should render follower items', () => {
    render(<MockFollowersList/>);
    const followerDivElement = screen.getByTestId("testing-head");
    // screen.debug(followerDivElement,"hhhh")
    expect(followerDivElement).toBeInTheDocument();
  });
  it('should render follower items', async() => {
    render(<MockFollowersList/>);
    // const followerDivElement = await screen.findByTestId("follower-item-0");
      await wait(() => expect( screen.findByTestId("follower-item-0")).toBeInTheDocument()
    // expect(screen.getByText("Something went wrong.")).toBeInTheDocument()
  );
    // console.log(screen.debug(null, Infinity));
    // expect(followerDivElement).toBeInTheDocument();
  });
  // it('should render multiple follower items',async () => {
  //     render(<MockFollowersList/>);
  //     const followerDivElement = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElement.length).toBe(5);
  //   });
})
