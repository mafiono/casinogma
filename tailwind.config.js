module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#0f0f0f",
          "900_7f": "#0000007f",
          "900_01": "#000000",
          "900_19": "#00000019",
          "900_14": "#00000014",
          "900_3d": "#0000003d",
        },
        red: {
          200: "#cbb292",
          300: "#cb8252",
          400: "#db4655",
          500: "#e64c3c",
          600: "#e94141",
          700: "#bd3d44",
          800: "#c03a2b",
          "200_02": "#eda1ab",
          "200_01": "#ff9a9f",
          "600_02": "#d5364c",
          "600_01": "#e63950",
          "500_01": "#f05434",
          "400_02": "#ec5569",
          "400_01": "#dc4655",
          "400_03": "#ec4b62",
          "300_06": "#de5c6e",
          A200_01: "#ff4d4f",
          A400: "#f5222d",
          "300_02": "#c2615f",
          "300_03": "#df646e",
          "300_04": "#e5646e",
          "300_05": "#e6646e",
          "300_01": "#e96d72",
          "700_01": "#d82f3c",
          A200: "#ff6262",
          "800_01": "#c62525",
          A100: "#f28383",
        },
        amber: {
          100: "#f9eab0",
          200: "#ffe07d",
          300: "#ffcf5d",
          400: "#f0c419",
          700: "#ff9c00",
          A100: "#ffe17d",
          "400_01": "#ffc72e",
          A200: "#ffda44",
          "700_01": "#ffa511",
          "100_01": "#ffedb1",
          "300_01": "#f3d55b",
          A100_01: "#fbe77b",
        },
        yellow: {
          300: "#ffed75",
          400: "#ffe164",
          500: "#fce547",
          600: "#fcdd2e",
          800: "#fba615",
          900: "#ff8229",
          "800_02": "#f29c1f",
          "800_01": "#e09b2d",
          "600_01": "#ffd92d",
          A700: "#ffde00",
          A700_01: "#ffdc13",
          "900_02": "#e38523",
          "900_01": "#e57e25",
          "300_01": "#f5ea72",
          A200: "#f8ff13",
        },
        blue_gray: {
          50: "#ecf0f1",
          100: "#d9d9d9",
          400: "#82828e",
          500: "#48709b",
          600: "#546a79",
          700: "#435159",
          800: "#38454f",
          900: "#363636",
          "900_02": "#2e3c43",
          "900_01": "#333333",
          "500_01": "#6171a3",
          "700_01": "#544f56",
          "600_01": "#565e75",
          "100_01": "#c7d0d8",
          "100_02": "#ccd6db",
          "100_03": "#cdcecf",
        },
        pink: {
          200: "#df73c1",
          300: "#ff6b81",
          500: "#ed2061",
          900: "#962a3a",
          "300_02": "#dd4fb1",
          "300_01": "#f26d9f",
          A100: "#f683ae",
        },
        purple: { 300: "#ca59a6", 500: "#aa3584", 800: "#6d2c92" },
        orange: {
          200: "#fac176",
          300: "#e9a761",
          500: "#fa9801",
          600: "#ee940d",
          800: "#ed6d11",
          "200_02": "#fcc772",
          "200_01": "#ffc269",
          A700: "#ff6000",
          A700_01: "#fd5900",
          "300_04": "#ffb64c",
          "300_03": "#ffa95f",
          A100: "#ffd580",
          A100_01: "#f7cf69",
          A200: "#ff983b",
          A200_01: "#f7b239",
          "300_02": "#ffb366",
          "300_01": "#f3bf49",
        },
        blue: {
          50: "#e9efff",
          100: "#d4d4ff",
          200: "#94cfff",
          600: "#2197d8",
          900: "#0052b4",
          A200_01: "#488bff",
          A200: "#338af3",
          "100_01": "#d3dcfb",
        },
        gray: {
          50: "#fafafa",
          100: "#f2f0f3",
          200: "#eeeeee",
          300: "#e6e6e6",
          400: "#c9c3ca",
          500: "#919191",
          600: "#737373",
          700: "#7f5b53",
          800: "#3b3b44",
          900: "#111111",
          "700_02": "#5d5360",
          "700_03": "#666666",
          "700_01": "#655e67",
          "500_01": "#a8a8a8",
          "200_01": "#f0f0f0",
          "200_02": "#e6e7e8",
          "200_03": "#efefef",
          "900_02": "#1f1f1f",
          "900_03": "#262626",
          "900_04": "#171717",
          "900_01": "#1a1a1a",
          "300_05": "#e1e1e4",
          "300_04": "#d5d9f2",
          "300_03": "#dcd9dc",
          "300_02": "#e0dee2",
          "300_01": "#e0dde1",
          "600_90": "#73737390",
          "50_01": "#fff5f5",
          "50_02": "#f8f8f8",
          "800_03": "#403f3f",
          "800_02": "#4d4d4d",
          "800_01": "#404040",
          "100_03": "#f3f1f4",
          "100_02": "#f1f0f7",
          "100_04": "#f0f2ff",
          "100_01": "#f4f4f4",
          "600_02": "#6f6571",
          "600_01": "#6e6e6e",
        },
        white: {
          A700_66: "#ffffff66",
          A700_01: "#fefefe",
          A700_7f: "#ffffff7f",
          A700: "#ffffff",
        },
        deep_orange: {
          300: "#f79e60",
          400: "#d77d41",
          500: "#f95428",
          700: "#e54728",
          800: "#d25627",
          "400_01": "#f96e53",
          A100: "#f3a977",
        },
        green: { 600: "#3caa38", 800: "#078830" },
        deep_purple: {
          100: "#c3aff0",
          200: "#a78cd6",
          300: "#956ec4",
          400: "#836da6",
          "400_01": "#745b9c",
          A100: "#b09df4",
        },
        cyan: {
          400: "#31cdc7",
          500: "#13c2c2",
          600: "#00b2bf",
          900: "#124a6a",
          "500_01": "#00d2d7",
          A400: "#00f0f5",
        },
        teal: {
          100: "#b5d3e3",
          200: "#77d1b3",
          300: "#67b59f",
          600: "#168c80",
          700: "#0b687f",
          "700_01": "#13776b",
          "200_01": "#8abbd5",
        },
        lime: { 500: "#d3ef30", 900: "#b27214" },
        indigo: {
          50: "#e4eaf6",
          100: "#c7cfe2",
          200: "#a4ace3",
          300: "#8697cb",
          500: "#3350b9",
          800: "#26457d",
          900: "#192f5d",
          "300_02": "#717ed4",
          "300_01": "#629acc",
          "900_01": "#090898",
          "900_02": "#21386b",
          A200: "#577bfb",
        },
        light_blue: { 300: "#55bef9", 400: "#2ba5f7" },
        light_green: { 400: "#b8a75d" },
      },
      fontFamily: { roboto: "Roboto", montserrat: "Montserrat" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#363636,#1a1a1a,#1a1a1a,#363636)",
        gradient1: "linear-gradient(180deg ,#1a1a1a,#1a1a1a,#363636)",
        gradient2: "linear-gradient(0deg ,#fd5900,#ffde00)",
      },
      boxShadow: {
        bs: "0px 1px  2px 0px #00000014",
        bs1: "0px 2px  4px 0px #00000019",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
