import {sample as sampleLibrary} from '../../lib/sample/index.js';

export default async function sample(request, response, next) {
  try {
    const {input: query = ''} = request.query;
    const responseString = await sampleLibrary({query});
    response.json(`${responseString}`);
  } catch (error) {
    next(error);
  }
}
