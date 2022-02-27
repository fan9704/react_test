module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // 幫助webpack輸出檔案debug
    devtool: "source-map",

    resolve: {
        // 加入'.ts' and '.tsx' 結尾
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // 所有有.ts和.tsx結尾的檔案都可以被awesome-typescript-loader處理
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // 所有結尾為.js檔案會被source-map-loader處理
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};