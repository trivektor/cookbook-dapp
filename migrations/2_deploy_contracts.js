const Cookbook = artifacts.require("../contracts/Cookbook.sol");

module.exports = function (deployer) {
  deployer.deploy(Cookbook);
};
