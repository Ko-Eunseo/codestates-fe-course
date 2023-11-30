const flights = require('../repository/flightList');
const fs = require('fs');

module.exports = {
  // [GET] /flight
  // 요청 된 파라미터 departure_times, arrival_times 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  // 요청 된 파라미터 departure, destination 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    const { departure_times, arrival_times, destination, departure } = req.query;
    // TODO:
    // res.send(req.query.departure_times);
    if (departure_times && arrival_times) {
      const filteredFlights = flights.filter((flight) => {
        return (flight.departure_times === departure_times
          && flight.arrival_times === arrival_times);
      })
      return res.status(200).json(filteredFlights);
    } else if (destination && departure) {
      filteredFlights = flights.filter((flight) => {
        return (flight.destination === destination
          && flight.departure === departure);
      })
      return res.status(200).json(filteredFlights);
    }
    return res.json(flights);
  },

  // [GET] /flight/:ㅕㅕid
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    const { uuid } = req.params;
    // TODO:
    if (req.params !== undefined) { //출발시간과 도착시간이 있으면
      const filteredFlights = flights.filter((flight) => { //flights 리스트에서 동일한 출발시간과 도착시간을 반환
        return (
          flight.uuid === uuid
        );
      });
      return res.status(200).json(filteredFlights);
    }
    return res.json(flights);
  },

  // Advanced
  // [PUT] /flight/:uuid 요청을 수행합니다.
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    const { uuid } = req.params;
    const bodyData = req.body;
    // TODO:

    return res.json(bodyData);
  }
};
