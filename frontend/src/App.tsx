// import { ConnectKitButton } from "connectkit";
// import { useAccount } from "wagmi";

// import { Account } from "./components/Account";
import { EVMResults } from "./components/EVMResults";

import { useState } from "react";

import "./App.css";

export function App() {
  //   const { isConnected } = useAccount();
  const [textCode, setTextCode] = useState("");
  const [textData, setTextData] = useState("");
  const [textValue, setTextValue] = useState("");
  const [bytecode, setBytecode] = useState("");
  const [data, setData] = useState("");
  const [value, setValue] = useState("");

  const sendParamters = () => {
    setBytecode(textCode);
    setData(textData);
    setValue(textValue);
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="header-left">
            <img src="vEVM.png" alt="logo" className="header-left-img" />
          </div>
          <div className="header-center">
            <h1>vEVM</h1>
            <h5>demo</h5>
          </div>
          <div className="header-right">{/* <ConnectKitButton /> */}</div>
        </div>
      </header>
      <div className="main">
        <div>
          <div className="hint">
            <p>
              time is critical
              <br />
              my wei balance is a joke
              <br />
              please select for me
            </p>
          </div>
          <div className="hint-detail">
            <p>
              0xcd676126e5e1c8fbf675646cf165bf2476a19efbdaced9e204ad3dc40d01ad0f
              {/* answer: 1677231384, 0x63F88518 in hex*/}
              {/* detail: the has is a transaction id.  on etherscan, there is a timestamp. converting that timestamp to a unix timestamp gives the answer. */}
              <br />
              0x4121e8574d28b2e5f5777f7b00d435ee4886a5f4
              {/* answer: 9001, 0x2329 in hex */}
              {/* detail: the address is a contract.  on etherscan, there is a balance.  converting that balance to a decimal gives the answer. */}
              <br />
              function execute(bytes,bytes,uint256)
              {/* answer: 0xa8c54211 */}
              {/* detail: when you call a function on a contract, it selects the function using the function signature, which is the first 4 bytes a keccak256 hash. */}
            </p>
          </div>
        </div>
        
        <br />

        bytecode: sum the answers, copy to memory, and return
        {/* one possible bytecode: 6363F8851861232963a8c542110101600052601C6004F3 */}
        {/* answer: 0x0000000000000000000000000000000000000000000000010cbdea52 */}
        {/* detail: push all 3 values to teh stack, and then add twice to get the sum. the answer is now on the stack, but the return opcode requires it to be in memory, so copy it to memory, and return it.  */}
        <textarea
          className="textarea-terminal"
          value={textCode}
          placeholder="0x60016002600360040160005260206000F3"
          onChange={(e) => setTextCode(e.target.value)}
        />
        {/* <div className="tx-params">
          <input
            className="tx-params-input-left"
            value={textData}
            type="text"
            placeholder="calldata"
            onChange={(e) => setTextData(e.target.value)}
          />
          <input
            className="tx-params-input-right"
            value={textValue}
            type="text"
            placeholder="value"
            onChange={(e) => setTextValue(e.target.value)}
          />
        </div> */}

        <button className="button-execute on" onClick={(e) => sendParamters()}>
          Execute
        </button>
        {bytecode && (
          <EVMResults bytecode={bytecode} data={data} value={value} />
        )}
      </div>

      //TODO: modify footer <br/>
      //TODO: leave evm.codes <br/>
      //TODO: leave ethereum spec <br/>
      //TODO: change etherscan link to https://goerli.basescan.org <br/>
      //TODO: leave github <br/>
      //TODO: add https://www.4byte.directory/<br/>
      //TODO: add https://emn178.github.io/online-tools/keccak_256.html<br/>


      <footer>
        <a href="https://www.evm.codes/?fork=merge" target={"_blank"}>
          <img height="25" src="logo-evmcodes-light.png" alt="evm codes"></img>
        </a>
        <a
          href="https://ethereum.github.io/execution-specs/autoapi/ethereum/paris/vm/index.html"
          target={"_blank"}
        >
          <img
            height="25"
            src="logo-specification-light.png"
            alt="Ethereum Specification"
          ></img>
        </a>
        <a
          href="https://goerli.basescan.org/address/0x4121E8574D28b2E5f5777F7B00d435Ee4886A5F4#code"
          target={"_blank"}
        >
          <img height="25" src="logo-etherscan-light.svg" alt="Etherscan"></img>
        </a>
        <a href="https://github.com/kethcode/vEVM" target={"_blank"}>
          <img height="25" src="logo-github-light.png" alt="GitHub"></img>
        </a>
      </footer>
    </>
  );
}
