const mockResponse=()=>{
  data:{
    results:[
      {
        name:{
          first:"John",
          last:"Don"
        },
        picture:{
          large:"https://randomuser.me/api/portraits/men/39.jpg"
        },
        login:{
          username:"TheGoat"
        }
      }
    ]
  }
}
export default{
  get:jest.fn().mockResolvedValue(mockResponse)
}