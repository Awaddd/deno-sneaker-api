// interfaces
import Sneaker from "../interfaces/Sneaker.ts";

// data
import sneakers from "../data/sneakers.ts";

export default {
  getAll: ({ request, response }: { request: any; response: any }) => {
    if (!sneakers) {
      response.status = 404;
      response.body = {
        message: "There are no sneakers",
      };
    }

    response.status = 200;
    response.body = {
      data: sneakers,
    };
  },
  getByID: ({
    params,
    response,
  }: {
    params: { id: string };
    response: any;
  }) => {
    const sneaker: Sneaker | undefined = sneakers.find((sneaker) => {
      return sneaker.id === params.id;
    });

    if (!sneaker) {
      response.status = 404;
      response.body = {
        message: "Sneaker not found",
      };
      return;
    }

    response.status = 200;
    response.body = {
      data: sneaker,
    };
  },
  add: async ({ request, response }: { request: any; response: any }) => {},
};
