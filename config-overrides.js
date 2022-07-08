// const { useBabelRc, override, addWebpackModuleRule } = require("customize-cra");

// const {
//   getLocalIdent,
// } = require("@dr.pogodin/babel-plugin-react-css-modules/utils");

// module.exports = override(
//   useBabelRc(),
//   addWebpackModuleRule({
//     test: /\.(css|scss)$/,
//     use: [
//       "style-loader",
//       {
//         loader: "css-loader",
//         options: {
//           importLoaders: 1,
//           modules: {
//             getLocalIdent,
//             localIdentName: "[name]__[local]___[hash:base64:6]",
//           },
//         },
//       },
//       "sass-loader",
//     ],
//     include: /\.module\.scss$/,
//   }),
//   addWebpackModuleRule({
//     test: /\.(css|scss)$/,
//     use: ["style-loader", "css-loader", "sass-loader"],
//     exclude: /\.module\.scss$/,
//   })
// );
