import {healthcheck as healthcheckLibrary} from '../../lib/healthcheck/index.js';

export default async function healthcheck(request, response, next) {
  try {
    const {query = '', originalUrl} = request;
    const responseString = await healthcheckLibrary({query});

    response.json(`Request URL: ${originalUrl} ${responseString}`);
  } catch (error) {
    next(error);
  }
}
