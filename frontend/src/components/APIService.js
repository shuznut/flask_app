export default class APIService{

    static UpdateUsecase(usecase_id, body){
        return fetch(`http://127.0.0.1:5000/update/${usecase_id}`,{
            'method':'PUT',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }


    static InsertUsecase(body){
        return fetch(`http://127.0.0.1:5000/add/`,{
            'method':'POST',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }
}