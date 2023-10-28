import Resizer from 'react-image-file-resizer';

export const resizeFile = (file: Blob): Promise<string> => {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1200,
      1200,
      'JPEG',
      50,
      0,
      (uri) => {
        resolve(uri as string);
      },
      'file'
    );
  });
};

export const textToLink = (comment: string) => {
  const regexp_url = /(https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+)/g;
  let linkedComment = comment.replace(
    regexp_url,
    '<a class="hash" href="$1" blank_="true">$1</a>'
  );

  const newline = /\r\n|\n/g;
  linkedComment = linkedComment.replace(newline, '<br />');

  const space = '　';
  linkedComment = linkedComment.replace(space, ' ');

  return linkedComment;
};

export const convertToSushi = (personality: string): string => {
  switch (personality) {
    case 'ISTJ':
      return 'マグロ';
    case 'ESFJ':
      return 'サーモン';
    case 'ISFJ':
      return 'トロ';
    case 'INFJ':
      return 'ハマチ';
    case 'INTJ':
      return 'イカ';
    case 'ISTP':
      return 'サバ';
    case 'ISFP':
      return 'イクラ';
    case 'INFP':
      return 'タコ';
    case 'INTP':
      return 'タマゴ';
    case 'ESTP':
      return 'カニ';
    case 'ESFP':
      return 'ホタテ';
    case 'ENFP':
      return 'エビ';
    case 'ENTP':
      return 'アジ';
    case 'ESTJ':
      return 'アワビ';
    case 'ENFJ':
      return 'アナゴ';
    case 'ENTJ':
      return 'ウニ';
    default:
      return '寿司の種類が見つかりませんでした。';
  }
};

export const blurSushi =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2UlEQVR4nO2aSWgUQRSGvxhU9GbwYKJexH1FEJegJ8EYxQ0XBFFBXE/JSREPovGgCG6ogRzcDmpU9OAKioj7RTFGT6LgioiaRBJcIo4U/IGmmenpmamebrE+eJeeeu/99aZ6rQcOh8PhcDgc9hkCLABqgX3AeeAh0Ay8BD4CX2UfdaxZY8zYvUCNYphYiaYbUAlsB65pUinL9kWxTY4pyhk7lcAh4H0EE85m75XbaCgqJcAc4HoMk85kd6XJaIuU0cCDkKJagRtAPbAZWAZMBcYBg4ByoI+sXMfGacwy+dQrRmvInPeBUVFNfgnQkWXCJ4HlwDDL/4aJNVyxTY62AB0d0mqVhcDvNMn+AJeAWUBPikdP5bwkDX5dRusiW8kqMizBi8AY4meMCuHXZ1bJABsJdvkCdwLrc/DvrvN7OrAG2ARsBXYCB2U7dcz8tlpjB8k37CmyQdq8Wvdggae+oObBJsyq2QjcSiMqF+tUjI26UGaj1uf/wsL8+eULWhbC53kEt7pnIfKW+Xx+WJg/fiGrQviYu8BuS4V4rlhDQ+Rdlca/YFI++57jFbYvMAlYqnt717nfAJyRNXiuBZs1dqJ8w7JI2iIvQEp2DBhI/BgNxwN0FkwqwH4CR4AJxXgM9VCinEfTXKOKWoCUx14D+4HqHJduWPrq4eeAcoXVVTApnzWFTGze7xuBOt3/q4ARQD89/3tXTImO9dOYKvnUKcarkDmbilGAUmBdDqKynUI/LcR5JU2lxShAF6X6WnMWaLcwiVytXbkXSEsXRSuAl17APL2+Pi7w6S+TmYvdI+AwMFc50xFLAfz00peatcAO4ARwR4+mn4CWNHFb9JsZc1s+OxSjMmDCiSxAWHrIbPJPFSAKXAFwKwB3CuCuAbiLIDHfBWYD74C3ekHKlXz9E3MRfOvxeZNH3nz9XQFIyAqo1r9o/r2ZeeTN1z8xBYgLVwASvgK+BbzytiZQL7YDXggoQGMC9WI74LAMLTSfLW1mRl6A3pa+5Z/RDm6b/nkbk+8dRQFe57E5Ghf+zVGjvWAO+IJ2aiu6mBsh+W6Pm/Y8K8u1Lc3SugyMJX5MX9GVDHeU/raSVGX40pvUFhmjdYbtpIuzfP83q+QUsEK7OzYbGU2skcBK4HSWJql2aY2EkcC9gOT+gtzU1vcWdXhNA8ar/aXC0yZXoWPjNWa5fBoUI2jC/n5BU/zImaomqdT/1ijpZ0oCWmWNhtjpJiGmkfmqGpttT/izYm8DJielWTqIwcB8tbybdrVzarNt0tb5B0+7/Acde6Ix5+RToxgmlsPhcDgcDgc2+Qv8SYe9BKDX2AAAAABJRU5ErkJggg==';
