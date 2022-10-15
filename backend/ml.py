import PIL
import coremltools as ct
import numpy as np


def load_image(path, resize_to=None):
    img = PIL.Image.open(path)
    if resize_to is not None:
        img = img.resize(resize_to, PIL.Image.ANTIALIAS)

    img_np = np.array(img).astype(np.float32)
    return img_np, img


def predict(path):
    model = ct.models.MLModel("SkinConditionClassifier.mlmodel")
    height = 299
    width = 299

    _, img = load_image(path, resize_to=(width, height))
    out_dict = model.predict({"image": img})

    return {
        "classLabels": out_dict["classLabel"],
        "classLabelprobs": out_dict["classLabelProbs"],
    }
