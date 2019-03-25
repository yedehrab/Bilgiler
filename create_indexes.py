import os
import re
from urllib.parse import quote

# Indexlenmeyecek dosya isimleri
PRIVATE_FOLDERS = ['.git', 'images', 'pdfs', '.vscode', 'Windows10 Kaynakları']


def isPrivate(dir_name):
    for folder_name in PRIVATE_FOLDERS:
        if dir_name == folder_name:
            return True
    return False


def print_dirs_contents(dir_names):
    str = ""
    for dir_name in dir_names:
        if not isPrivate(dir_name) and os.path.isdir(dir_name):
            # Başlık oluşturma
            str += r"## " + dir_name + "\n\n"

            for file_name in os.listdir(dir_name):
                # Markdown dosyası ise bağlantı oluşturma
                if '.md' in file_name:
                    str += "- [" + file_name.split(".")[0] + \
                        "](" + quote(f"{dir_name}/{file_name}") + ")\n"
            str += "\n"
    return str


def create():
    dir_names = os.listdir()
    file_str = print_dirs_contents(dir_names)

    with open("README-index.md", "w", encoding="utf-8") as file:
        file.writelines(file_str)


# TODO
# * sadece indexleri alıp diğerlerini elle mi yapsam
# ! Yoksa komple readme'yi mi yenilesin
create()
