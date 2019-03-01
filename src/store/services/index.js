import axios from 'axios';

export const services = {
  getImages: (product) => {
    const params = {
      key: 'AIzaSyDbYWSFMQRz7_4tDxgdcBAosMjEq06i8CY',
      cx: '013308934830263620789:jel27ptyba4',
      searchType: 'image',
      lr: 'lang_pt',
      num: 1,
      q: product,
    }
    return axios.get('https://www.googleapis.com/customsearch/v1', { params })
      .then(resp => resp.data.items[0].link)
      .catch(err => err);
  }
}
