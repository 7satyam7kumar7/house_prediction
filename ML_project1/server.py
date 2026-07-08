from fastapi import FastAPI
from pydantic import BaseModel
import utils
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
utils.get_artifacts()
class HouseRequest(BaseModel):
    total_sqft: float
    location: str
    bhk: int
    bath: int


@app.get("/get_location_names")
def get_location_names():
    return {
        "locations": utils.get_location()
    }



@app.post("/predictor")
def predictor(data: HouseRequest):
    estimated_price = utils.get_prediction(
        data.location,
        data.total_sqft,
        data.bhk,
        data.bath
    )

    return {
        "estimated_price": estimated_price
    }



   