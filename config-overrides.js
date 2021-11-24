const {
    override,
    addWebpackAlias,
  } = require("customize-cra");
  const path = require("path");
  
  const closedMap = config => {
    // 修改掉webpack里面devtool的配置
     config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
     return config;
   }; 

  module.exports = {
    webpack: override(
      closedMap,
      addWebpackAlias({
        //路径别名
        "@": path.resolve(__dirname, "src"),
      }),
    ),
  };
  