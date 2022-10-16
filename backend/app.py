from flask import Flask, request
import io, base64
from PIL import Image
import os
from flask_cors import CORS, cross_origin
from ml import predict
from werkzeug.utils import secure_filename

app = Flask(__name__)
cors = CORS( app, resources={r"/*": {"origins": "*"}})

UPLOAD_FOLDER = "./static"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


@app.route("/")
def hello_world():
    return "Hello World!"


@app.route("/classify", methods=["POST"])
@cross_origin()
def classify():
    if request.files.get("image") is None:
        return "No image", 400
    f = request.files["image"]
    path = os.path.join(app.config["UPLOAD_FOLDER"], secure_filename(f.filename))
    f.save(path)

    result = predict(path)

    primary_class_label = result["classLabels"]
    eczema = result["classLabelprobs"]["Eczema Photos"]
    light_disease = result["classLabelprobs"]["Light Diseases and Disorders of Pigmentation"]
    melanoma = result["classLabelprobs"]["Melanoma Skin Cancer Nevi and Moles"]
    acne = result["classLabelprobs"]["Acne and Rosacea Photos"]
    contact_dermatitis = result["classLabelprobs"]["Poison Ivy Photos and other Contact Dermatitis"]
    atopic_dermatitis = result["classLabelprobs"]["Atopic Dermatitis Photos"]

    return {
        "primary_class_label": primary_class_label,
        "light_disease": "{:.4f}".format(light_disease),
        "melanoma": "{:.4f}".format(melanoma),
        "acne": "{:.4f}".format(acne),
        "contact_dermatitis": "{:.4f}".format(contact_dermatitis),
        "atopic_dermatitis": "{:.4f}".format(atopic_dermatitis),
        "eczema": "{:.4f}".format(eczema),
    }

if __name__ == "__main__":
    app.run(debug = True)