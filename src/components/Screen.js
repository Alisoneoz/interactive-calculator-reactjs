const Screen = ({ input })=>(

  <div className="input">
    {input === Infinity ? "0" : input}
  </div>
)


export default Screen