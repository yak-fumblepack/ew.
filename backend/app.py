from flask import Flask, request
import os
from werkzeug.utils import secure_filename
from ml import predict

app = Flask(__name__)

UPLOAD_FOLDER = "./static"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


@app.route("/")
def hello_world():
    return "Hello World!"


@app.route("/classify", methods=["POST"])
def classify():
    if request.files.get("image") is None:
        return "No image", 400
    f = request.files["image"]
    path = os.path.join(app.config["UPLOAD_FOLDER"], secure_filename(f.filename))
    f.save(path)

    result = predict(path)

    primary_class_label = result["classLabels"]
    hives = result["classLabelprobs"]["hives"]
    acne = result["classLabelprobs"]["acne"]
    eczema = result["classLabelprobs"]["eczema"]

    return {
        "primary_class_label": primary_class_label,
        "hives": "{:.4f}".format(hives),
        "acne": "{:.4f}".format(acne),
        "eczema": "{:.4f}".format(eczema),
    }


if __name__ == "__main__":
    app.run()