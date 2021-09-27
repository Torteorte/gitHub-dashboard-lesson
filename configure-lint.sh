if [ "$1" = ts ]
  then
    config=$(cat ts-eslintrc.json)
  elif [ "$1" = js ]
    then
      config=$(cat js-eslintrc.json)
  else
    exit 0
  fi
cd ..
npm install eslint --save-dev
npm install prettier --save-dev
npm install --save-dev eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser

touch .eslintrc.json
echo "$config" > .eslintrc.json

echo '{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}' > .prettierrc