#!/bin/bash
# dev

function usage() {
echo "
  To develop:
  ./dev

  To run a server:
  ./dev --server

  To build before the develop:
  ./dev --build
"
}

# Empty arguments
if [[ -z "$1" ]]; then
  usage;
  exit 1;
fi

# Parse arguments
while [[ $# > 0 ]]; do
  key="$1"

  case $key in
    -b|--build)
      __build=true
      ;;

    -j|--jade)
      __jade=true
      ;;

    -s|--stylus)
      __stylus=true
      ;;

    -S|--server)
      __server=true
      ;;

    -l|--livereload)
      __livereload=true
      ;;

    -h|--help)
      usage;
      exit 1;
      ;;

    *)
      usage;
      echo "  [error] unknown option:" $key;
      exit 1;
      ;;
  esac

  shift;
done

# Run build first
if [[ $__build ]]; then
  sh ./build.sh
fi

# Jade
if [[ $__jade ]]; then
  jade --watch --pretty --out ./public/ ./templates/*.jade
fi

# Stylus
if [[ $__stylus ]]; then
  stylus --watch --out ./public/assets/css/ ./styles/*.styl
fi

# Livereload
if [[ $__livereload ]]; then
  echo "  run livereload"
  livereload . > /dev/null
fi

# Server
if [[ $__server ]]; then
  server_port=8082;
  echo "  run server at port ${server_port}"
  http-server -p $server_port > /dev/null;
fi
