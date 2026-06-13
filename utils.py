import numpy as np
import pandas as pd
import json
import pickle

__location=None
__model=None
__data_col=None

def get_artifacts():
 global __model
 with open('bangalore_home_price.pickle','rb') as f:
  __model=pickle.load(f)
 global __data_col 
 global __location
 with open("columns.json",'r') as f:
  __data_col=json.load(f)["data_columns"]
  __location=__data_col[3:]

def get_location():
 return __location

def get_prediction(loc,sqft,bhk,bath):
 x=np.zeros(len(__data_col))
 x[0]=sqft
 x[1]=bath
 x[2]=bhk
 try:
  loc_ind=__data_col.index(loc.lower())
  x[loc_ind]=1
  return round(float(__model.predict([x])[0]), 2)
 except:
  return round(float(__model.predict([x])[0]), 2)

 

 
  
if __name__=="__main__":
 get_artifacts()
 print(get_location())
 print(get_prediction('1st Phase JP Nagar',1000, 3, 3))
