Bangalore House Price Prediction
Project Overview

The Bangalore House Price Prediction project is an end-to-end machine learning web application that estimates the price of residential properties in Bangalore based on various features such as location, total square feet, number of bedrooms (BHK), and number of bathrooms.

The project follows the complete machine learning workflow, starting from data preprocessing and feature engineering to model training, deployment, and frontend integration.

Objectives

The primary objective of this project is to build an accurate regression model capable of predicting house prices while demonstrating the complete machine learning pipeline and deployment process.

Workflow
1. Data Collection

The project uses the Bangalore Housing dataset containing information such as:

Area (Square Feet)
Location
Number of Bedrooms (BHK)
Bathrooms
Price
2. Data Preprocessing

Several preprocessing techniques were applied to improve data quality:

Handling missing values
Removing duplicate records
Converting data types
Cleaning inconsistent entries
Extracting numerical values from textual features
Removing irrelevant columns
3. Feature Engineering

Important features were engineered to improve model performance:

Converted categorical locations into numerical format using One-Hot Encoding
Created a price-per-square-foot feature for better outlier detection
Selected significant features for prediction
4. Outlier Detection and Removal

To improve model accuracy, multiple outlier removal techniques were applied:

Removed houses with unrealistic square feet per bedroom
Eliminated abnormal price-per-square-foot values
Filtered inconsistent records based on statistical analysis

This significantly reduced noise in the dataset.

5. Model Training

Multiple regression algorithms were evaluated using Scikit-learn.

Typical models include:

Linear Regression
Lasso Regression
Decision Tree Regressor

Cross-validation techniques were used to compare model performance, and the best-performing model was selected.

6. Model Serialization

After training, the final model was saved using Pickle for deployment.

Additional files were also stored:

bangalore_home_price.pickle – trained model
columns.json – feature names
model_column.pickle – processed feature columns

These files allow predictions without retraining the model.

7. Backend Development

A backend API was developed using Python (FastAPI/Flask).

Responsibilities include:

Loading the trained model
Receiving user inputs
Preprocessing input features
Encoding categorical variables
Predicting house prices
Returning prediction results to the frontend

Utility functions are organized inside utils.py to separate business logic from API code.

8. Frontend Development

A simple web interface was developed using:

HTML
CSS
JavaScript

Users can enter:

Location
Square Feet
Number of Bathrooms
Number of BHK

The frontend sends the data to the backend using HTTP requests and displays the predicted house price.
