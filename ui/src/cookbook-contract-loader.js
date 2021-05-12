import { useEffect, useState } from "react";
import Web3 from "web3";

import CookbookContract from "./contracts/Cookbook.json";
import Cookbook from "./cookbook";

const WEB3_PROVIDER_SOCKET_URL = "ws://localhost:7545";

const CookbookContractLoader = () => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const web3 = new Web3(WEB3_PROVIDER_SOCKET_URL);

    const getAccounts = async () => {
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = CookbookContract.networks[networkId];
      const instance = new web3.eth.Contract(
        CookbookContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      setContract(instance);
      setAccount(accounts[0]);
    };

    getAccounts();
  }, []);

  return contract && <Cookbook contract={contract} account={account} />;
};

export { CookbookContractLoader as default };
