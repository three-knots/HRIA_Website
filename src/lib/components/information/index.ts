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
  name: '',
  address: '',
  phone: '',
  email: '',
  description: '',
  image: '',
  logo: '',
};

export default masjid;
