// This file is used to store the masjid information that will be used in the website.  It should be updated with the correct masjid information in order to make the changes across the website.

interface Masjid {
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  image: string;
  logo: string;
}

const masjid: Masjid = {
  name: 'Highlands Ranch Islamic Association',
  address: '12345 E. Deer Creek Dr. Highlands Ranch, CO 80126',
  phone: '303-987-6543',
  email: '',
  description: '',
  image: '',
  logo: '',
};

export default masjid;
