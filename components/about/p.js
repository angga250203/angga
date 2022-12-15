import React from "react";
import {motion} from "framer-motion"

function P() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 md:w-36 lg:w-40"
      fill="none"
      viewBox="0 0 150 146"
    >
      <path
        fill="#9BE7FF"
        d="M150 73c0 40.317-33.579 73-75 73S0 113.317 0 73 33.579 0 75 0s75 32.683 75 73z"
      ></path>
      <path
        stroke="#fff"
        d="M120.5 73c0 24.566-20.361 44.5-45.5 44.5-25.14 0-45.5-19.934-45.5-44.5S49.86 28.5 75 28.5c25.139 0 45.5 19.934 45.5 44.5z"
      ></path>
      <path
        fill="#0D2886"
        d="M93.06 74.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L89.88 73l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM58 74.5h34v-3H58v3z"
      ></path>
      <motion.path
       animate={{rotate:360}}
       transition= {{ ease:"linear", duration:4,repeat:Infinity}}
        fill="#09076A"
        d="M80.357 130.758l.42 8.717-2.946.142c-.684.033-1.249-.064-1.695-.29a2.32 2.32 0 01-1.018-.945 3.063 3.063 0 01-.382-1.381 3.087 3.087 0 01.248-1.415 2.34 2.34 0 01.913-1.051c.423-.268.973-.418 1.651-.451l2.111-.101.045.936-2.077.1c-.468.022-.84.121-1.116.297a1.448 1.448 0 00-.586.685 2.19 2.19 0 00-.15.95c.016.349.097.658.24.927.141.269.36.475.653.617.294.145.678.206 1.152.184l1.856-.09-.374-7.78 1.055-.051zM70.67 130.736l-.668 6.512-.966-.099.1-.984-.067-.007c-.152.31-.393.549-.725.718a1.905 1.905 0 01-1.082.193 9.29 9.29 0 01-.275-.032 3.235 3.235 0 01-.249-.039l.105-1.017c.033.012.109.033.229.062.116.032.241.055.374.069.317.032.606-.005.868-.113.26-.104.473-.265.641-.482.165-.215.262-.469.292-.763l.423-4.12 1 .102zM60.77 128.876c.572.147 1.04.413 1.4.797.36.383.597.85.712 1.403.113.551.085 1.154-.084 1.809-.17.66-.438 1.205-.805 1.636-.369.43-.803.726-1.303.887-.502.161-1.039.168-1.611.02-.572-.148-1.038-.413-1.397-.796a2.824 2.824 0 01-.71-1.407c-.115-.555-.087-1.163.083-1.823.169-.654.438-1.195.806-1.623.366-.427.8-.722 1.302-.883.5-.161 1.035-.168 1.607-.02zm-.226.874c-.434-.112-.82-.093-1.159.058-.338.15-.621.389-.85.718a3.47 3.47 0 00-.506 1.128c-.11.423-.144.835-.104 1.236.04.401.172.75.394 1.048.223.298.551.503.986.615.434.112.821.092 1.16-.061.339-.153.623-.396.852-.727.23-.331.398-.708.508-1.132.109-.423.143-.834.102-1.232a2.04 2.04 0 00-.396-1.04c-.223-.295-.552-.499-.987-.611zM51.405 132.777l-.93-.382 2.669-6.496c.153-.373.35-.67.591-.891.239-.221.517-.354.837-.398.316-.045.669.013 1.057.172l.095.039.095.039-.357.867-.086-.035a19.944 19.944 0 00-.087-.036c-.284-.117-.526-.118-.727-.004-.199.112-.362.322-.488.629l-2.67 6.496zm-.872.821c.181.074.312.2.393.378a.644.644 0 01.01.525.646.646 0 01-.376.366.715.715 0 01-.545-.008.7.7 0 01-.39-.376.636.636 0 01-.013-.526.638.638 0 01.38-.365.696.696 0 01.541.006zM46.21 122.767c.547.314.95.705 1.208 1.174.255.47.364.985.328 1.544-.04.56-.226 1.131-.56 1.713-.333.581-.733 1.033-1.199 1.355-.47.324-.968.5-1.492.53-.529.031-1.05-.101-1.562-.394a3.113 3.113 0 01-.791-.651 2.497 2.497 0 01-.512-.932c-.111-.355-.133-.754-.066-1.196.067-.443.253-.93.557-1.46l.212-.369 4.377 2.509-.433.754-3.49-2c-.183.32-.283.643-.299.967a1.67 1.67 0 00.199.905c.148.278.38.508.695.689.348.199.698.285 1.05.258.35-.026.67-.137.962-.333.293-.195.529-.45.708-.763l.289-.503c.245-.428.38-.834.403-1.217.02-.382-.06-.727-.237-1.035a2.113 2.113 0 00-.796-.761 2.164 2.164 0 00-.677-.26 1.529 1.529 0 00-.654.018 1.54 1.54 0 00-.598.315l-.707-.72c.253-.235.546-.401.88-.497a2.5 2.5 0 011.064-.058c.376.058.756.198 1.14.418zM38.938 117.645c.478.385.799.829.962 1.332.164.504.18 1.029.047 1.574-.133.546-.404 1.074-.814 1.583-.416.518-.88.898-1.389 1.141a2.887 2.887 0 01-1.554.287c-.527-.052-1.02-.263-1.48-.633a2.936 2.936 0 01-.81-.98 2.382 2.382 0 01-.258-1.126c.008-.387.118-.758.33-1.112l.784.63a1.56 1.56 0 00-.098.938c.057.346.259.657.604.935.306.246.638.381.996.407.355.026.712-.053 1.072-.237.355-.184.688-.469.998-.854.317-.394.531-.787.642-1.179.11-.394.115-.763.017-1.108a1.761 1.761 0 00-.616-.894 1.798 1.798 0 00-.64-.34 1.467 1.467 0 00-.667-.034 1.51 1.51 0 00-.63.281l-.784-.63c.287-.266.614-.449.983-.549a2.348 2.348 0 011.147-.019c.395.089.781.284 1.158.587zM27.425 115.786l.624-.581 2.311 2.483-.624.581-2.31-2.483zm.49 2.828l-.685-.736 4.566-4.251c.208-.193.336-.369.384-.526a.642.642 0 00-.015-.429 1.306 1.306 0 00-.238-.355 1.77 1.77 0 00-.198-.188l-.14-.101.521-.766c.065.033.149.085.25.157.105.07.22.174.348.311.194.208.339.453.435.736.095.281.111.572.05.874-.063.299-.233.578-.512.837l-4.766 4.437zM22.386 95.253c.08.195.08.39-.003.587a.739.739 0 01-.415.414.738.738 0 01-.586-.003.738.738 0 01-.415-.414.738.738 0 01.004-.587.738.738 0 01.414-.414.795.795 0 01.76.102.73.73 0 01.241.315zM18.058 76.258l-8.727.096-.032-2.948c-.008-.685.11-1.246.352-1.684.24-.44.567-.767.982-.982.415-.215.88-.325 1.394-.33.514-.006.983.094 1.406.3.422.202.761.52 1.016.951.252.432.381.988.389 1.667l.023 2.113-.937.01-.023-2.079c-.005-.469-.09-.844-.255-1.126a1.449 1.449 0 00-.664-.611 2.19 2.19 0 00-.943-.186c-.35.004-.662.073-.936.206-.274.131-.487.341-.64.63-.156.288-.232.67-.227 1.144l.02 1.858 7.79-.085.012 1.056zM18.438 66.58l-6.482-.91.135-.962.98.137.009-.067a1.572 1.572 0 01-.69-.752 1.906 1.906 0 01-.154-1.088 10.45 10.45 0 01.09-.521l1.013.142a3.046 3.046 0 00-.07.227c-.036.115-.064.24-.082.371a1.78 1.78 0 00.08.872c.095.263.248.482.458.658.208.173.459.28.751.32l4.102.576-.14.996zM20.665 56.755c-.168.566-.451 1.022-.848 1.37a2.867 2.867 0 01-1.428.659c-.556.092-1.157.042-1.805-.151-.654-.195-1.189-.484-1.605-.866a2.86 2.86 0 01-.839-1.335c-.142-.507-.129-1.044.04-1.61.17-.567.452-1.022.848-1.367a2.822 2.822 0 011.432-.658c.559-.094 1.165-.044 1.818.151.648.193 1.179.482 1.592.866.414.381.692.826.834 1.333.143.506.13 1.041-.039 1.608zm-.865-.259c.128-.43.123-.817-.015-1.16a2.035 2.035 0 00-.686-.876 3.476 3.476 0 00-1.108-.548 3.512 3.512 0 00-1.232-.15 2.062 2.062 0 00-1.062.355c-.306.212-.523.532-.65.962-.13.43-.123.818.018 1.162.14.344.371.637.694.878.322.242.693.425 1.112.55.42.125.829.174 1.228.148.399-.026.75-.145 1.053-.357.304-.212.52-.534.648-.964zM17.114 47.251l.417-.915 6.392 2.908c.367.167.657.375.868.624.212.246.334.53.367.85.033.318-.038.668-.212 1.051a70.389 70.389 0 00-.084.186l-.854-.388c.014-.03.027-.06.04-.085.01-.026.024-.054.038-.085.127-.28.137-.522.03-.726-.104-.204-.307-.374-.61-.512l-6.392-2.908zm-.788-.902a.715.715 0 01-.392.379.644.644 0 01-.525-.01.644.644 0 01-.352-.389.715.715 0 01.028-.544.7.7 0 01.39-.375.638.638 0 01.527.005c.17.078.287.21.35.394a.7.7 0 01-.026.54zM27.31 42.43c-.334.536-.74.924-1.218 1.165-.48.236-.998.327-1.555.27-.558-.06-1.122-.268-1.691-.622-.569-.355-1.006-.772-1.31-1.25a2.892 2.892 0 01-.474-1.51c-.011-.53.14-1.045.452-1.547.18-.289.407-.544.68-.766.271-.222.588-.381.95-.477.358-.098.758-.105 1.198-.021.44.083.92.287 1.437.61l.362.226-2.67 4.28-.738-.46 2.129-3.413a2.145 2.145 0 00-.956-.335 1.67 1.67 0 00-.912.165 1.742 1.742 0 00-.713.67c-.212.34-.311.686-.298 1.04.013.35.112.674.297.973.185.3.43.545.737.736l.491.306c.42.262.82.412 1.202.449.381.033.729-.033 1.043-.198a2.11 2.11 0 00.79-.768c.14-.224.235-.446.285-.666.05-.224.052-.442.006-.654a1.55 1.55 0 00-.292-.61l.745-.68c.226.261.38.56.465.898.082.335.088.69.018 1.066a3.319 3.319 0 01-.46 1.124zM32.698 35.354c-.402.463-.858.767-1.367.912-.51.145-1.034.141-1.575-.012-.54-.153-1.057-.443-1.55-.871-.503-.436-.866-.913-1.09-1.43a2.896 2.896 0 01-.229-1.564c.072-.525.3-1.01.688-1.457a2.932 2.932 0 011.009-.772c.37-.167.749-.24 1.135-.217.386.023.753.147 1.099.372l-.659.76a1.56 1.56 0 00-.934-.133c-.347.045-.666.235-.956.57a1.766 1.766 0 00-.444.98c-.04.353.026.713.197 1.079.17.362.443.706.816 1.03.382.33.767.56 1.155.685.389.123.758.142 1.106.057.35-.087.656-.28.917-.581.17-.198.292-.407.363-.627.07-.22.09-.443.058-.666a1.5 1.5 0 00-.256-.64l.659-.76c.254.296.425.63.512 1.003.086.368.078.75-.025 1.146-.103.392-.313.77-.629 1.136zM34.983 23.918l.557.645-2.567 2.217-.557-.645 2.567-2.217zm-2.844.384l.761-.657 4.078 4.721c.186.215.356.35.512.403a.64.64 0 00.428.001 1.3 1.3 0 00.364-.224c.084-.072.15-.136.196-.191l.106-.137.746.55c-.035.063-.09.145-.166.244a2.102 2.102 0 01-.324.336 2.024 2.024 0 01-.752.407c-.284.084-.575.09-.874.018-.297-.074-.57-.255-.819-.543l-4.256-4.928zM55.688 19.644a.738.738 0 01-.586-.024.739.739 0 01-.398-.43.738.738 0 01.024-.586.738.738 0 01.43-.4.738.738 0 01.586.026c.193.089.326.232.399.43a.796.796 0 01-.13.756.732.732 0 01-.325.228zM74.83 16.023L75.06 7.3l2.948.077c.684.018 1.24.156 1.669.415.43.255.746.595.945 1.018.2.423.292.891.279 1.405-.014.514-.131.979-.352 1.393a2.344 2.344 0 01-.99.98c-.44.236-1 .345-1.679.328l-2.113-.056.025-.937 2.079.055c.468.012.846-.06 1.135-.214.288-.154.5-.367.635-.64.138-.274.211-.587.22-.936.01-.35-.048-.663-.171-.942-.12-.279-.323-.5-.605-.664-.283-.167-.661-.256-1.136-.268l-1.857-.049-.204 7.787-1.056-.027zM84.49 16.763l1.149-6.444.956.17-.174.974.068.012c.174-.298.433-.519.776-.662a1.907 1.907 0 011.093-.113c.073.013.164.031.272.053.109.022.19.041.245.057l-.18 1.007a2.979 2.979 0 00-.223-.08 2.316 2.316 0 00-.368-.095 1.781 1.781 0 00-.874.048 1.47 1.47 0 00-1.023 1.172l-.728 4.078-.99-.177zM94.225 19.353c-.56-.19-1.006-.49-1.338-.899a2.866 2.866 0 01-.606-1.452c-.072-.558.001-1.157.218-1.797.22-.646.527-1.17.925-1.572.4-.402.855-.664 1.365-.789.512-.123 1.048-.09 1.608.1s1.004.489 1.334.898c.332.41.533.894.604 1.455.074.562.001 1.166-.218 1.812-.217.64-.525 1.16-.924 1.558-.397.4-.851.661-1.364.784-.51.125-1.045.092-1.604-.098zm.29-.856c.425.145.811.154 1.16.03.348-.126.648-.343.9-.654.253-.31.45-.673.59-1.087a3.51 3.51 0 00.194-1.225 2.062 2.062 0 00-.315-1.075c-.2-.313-.512-.542-.937-.686-.425-.144-.812-.153-1.161-.025-.35.128-.65.348-.904.661a3.51 3.51 0 00-.59 1.091c-.14.415-.205.822-.194 1.222.012.4.118.755.318 1.066.2.31.514.538.939.682zM103.853 16.157l.9.45-3.144 6.28c-.18.36-.399.642-.656.844a1.503 1.503 0 01-.863.335c-.319.022-.666-.062-1.042-.25l-.092-.046-.091-.046.42-.838.083.042.084.042c.274.137.516.157.724.058.207-.097.385-.294.534-.591l3.143-6.28zm.931-.754a.712.712 0 01-.364-.406.642.642 0 01.029-.524.644.644 0 01.402-.338.714.714 0 01.543.048.702.702 0 01.36.404.638.638 0 01-.025.526.637.637 0 01-.406.336.7.7 0 01-.539-.046zM108.292 26.524c-.522-.353-.895-.773-1.118-1.26a2.802 2.802 0 01-.213-1.564c.081-.556.31-1.111.685-1.667.376-.555.808-.976 1.297-1.263a2.892 2.892 0 011.528-.417c.529.008 1.039.178 1.528.51.282.19.529.426.741.706.212.28.359.603.441.968.085.362.077.761-.023 1.198-.1.437-.321.908-.663 1.414l-.239.353-4.179-2.827.487-.72 3.332 2.254c.207-.306.33-.62.37-.943a1.66 1.66 0 00-.131-.917 1.74 1.74 0 00-.642-.739 1.807 1.807 0 00-1.029-.335 1.96 1.96 0 00-.983.26c-.307.174-.561.41-.763.709l-.325.48c-.277.41-.441.804-.492 1.184-.048.38.005.73.159 1.05.156.318.402.59.738.818.219.148.437.251.655.31.222.057.44.067.654.03.215-.04.422-.13.62-.27l.651.77a2.15 2.15 0 01-.914.431c-.338.07-.694.063-1.066-.021a3.32 3.32 0 01-1.106-.502zM115.164 32.171c-.448-.419-.735-.885-.861-1.4a2.831 2.831 0 01.071-1.573c.172-.534.482-1.04.928-1.518.454-.485.944-.83 1.47-1.035a2.895 2.895 0 011.571-.17c.521.09.998.338 1.43.741.336.314.581.66.734 1.037.154.376.212.757.174 1.142a2.228 2.228 0 01-.412 1.085l-.735-.687c.148-.27.204-.58.168-.928-.032-.349-.21-.675-.534-.977a1.765 1.765 0 00-.963-.48 2 2 0 00-1.086.157c-.368.157-.721.416-1.059.777-.345.37-.588.746-.728 1.128a2.03 2.03 0 00-.098 1.104c.074.353.257.666.547.937.191.179.395.308.613.387.218.079.439.107.663.083.225-.024.441-.101.65-.233l.734.687a2.325 2.325 0 01-2.166.407c-.388-.117-.758-.34-1.111-.67zM126.507 34.879l-.665.533-2.12-2.648.665-.533 2.12 2.648zm-.278-2.856l.629.785-4.87 3.9c-.221.178-.362.343-.421.496a.636.636 0 00-.017.428c.048.133.118.257.21.372.069.087.131.154.184.203l.133.111-.577.725a2.119 2.119 0 01-.562-.51 2.016 2.016 0 01-.379-.767 1.645 1.645 0 01.015-.875c.085-.294.276-.56.573-.798l5.082-4.07zM130.01 55.729a.74.74 0 01.046-.585.74.74 0 01.445-.383c.2-.065.394-.05.584.047.19.096.318.244.383.444s.05.395-.047.585a.736.736 0 01-.444.383.8.8 0 01-.751-.158.73.73 0 01-.216-.333zM132.918 74.992l8.71.552-.187 2.943c-.043.683-.202 1.234-.476 1.652a2.319 2.319 0 01-1.052.907c-.43.183-.902.259-1.415.226a3.089 3.089 0 01-1.379-.403 2.341 2.341 0 01-.943-1.025c-.219-.449-.307-1.013-.264-1.69l.133-2.11.936.06-.132 2.075c-.029.468.028.849.171 1.142.144.294.349.514.616.659.27.148.579.233.928.255a2.16 2.16 0 00.948-.137c.283-.11.512-.303.686-.58.177-.276.28-.65.31-1.124l.117-1.855-7.774-.492.067-1.055zM131.821 84.617l6.396 1.387-.206.95-.966-.21-.014.067c.291.185.502.452.633.8.131.348.155.714.072 1.097l-.063.27a3.878 3.878 0 01-.066.243l-1-.217c.016-.032.045-.105.088-.221.044-.112.081-.234.109-.364.068-.311.063-.603-.015-.876-.075-.269-.211-.5-.408-.69a1.472 1.472 0 00-.726-.375l-4.048-.878.214-.983zM128.871 94.25c.211-.553.527-.987.948-1.304a2.869 2.869 0 011.473-.552c.561-.05 1.157.044 1.789.285.637.243 1.149.57 1.537.982.386.415.631.879.737 1.393.104.517.051 1.052-.16 1.604-.21.552-.526.985-.946 1.3-.422.316-.914.5-1.477.55-.565.052-1.165-.043-1.802-.286-.632-.24-1.14-.567-1.524-.981a2.839 2.839 0 01-.733-1.392c-.105-.514-.052-1.047.158-1.6zm.845.32c-.16.42-.184.806-.072 1.16.112.352.318.66.619.923.301.264.656.474 1.065.63.408.155.814.235 1.217.24.402.004.764-.088 1.085-.276.321-.188.561-.491.721-.91.16-.42.182-.807.068-1.16a2.069 2.069 0 00-.627-.928 3.517 3.517 0 00-1.069-.63 3.475 3.475 0 00-1.213-.239 2.04 2.04 0 00-1.078.278c-.318.19-.557.493-.716.913zM131.708 103.99l-.483.882-6.159-3.374c-.354-.194-.627-.423-.819-.687a1.5 1.5 0 01-.303-.875c-.01-.32.086-.664.288-1.033l.05-.09.049-.089.822.45a4.519 4.519 0 01-.09.165c-.148.269-.176.51-.084.721.088.211.278.396.57.556l6.159 3.374zm.719.958a.714.714 0 01.419-.349.644.644 0 01.523.048c.165.09.272.229.322.415a.715.715 0 01-.068.541.7.7 0 01-.417.345.64.64 0 01-.525-.045.638.638 0 01-.32-.418.701.701 0 01.066-.537zM121.183 108.041c.373-.509.806-.866 1.301-1.071a2.805 2.805 0 011.571-.154c.552.101 1.099.35 1.64.746.541.396.945.844 1.214 1.343.269.503.389 1.017.36 1.542-.028.529-.216 1.032-.565 1.508a3.118 3.118 0 01-.734.715 2.504 2.504 0 01-.983.405c-.366.071-.764.048-1.197-.068-.433-.116-.895-.355-1.388-.715l-.344-.252 2.98-4.071.702.513-2.377 3.246c.298.218.608.353.929.405.319.055.626.022.921-.096.293-.117.547-.322.762-.615.236-.323.361-.662.373-1.015a1.962 1.962 0 00-.223-.993 2.268 2.268 0 00-.68-.789l-.468-.342c-.399-.292-.787-.471-1.165-.536a1.849 1.849 0 00-1.055.12c-.323.144-.605.38-.845.707a2.186 2.186 0 00-.333.643c-.066.22-.084.437-.055.652.031.217.114.427.247.63l-.794.623a2.146 2.146 0 01-.397-.93 2.5 2.5 0 01.061-1.064c.099-.367.28-.73.542-1.087zM115.285 114.699c.435-.433.912-.702 1.431-.809a2.824 2.824 0 011.569.129c.528.193 1.022.521 1.483.984.468.472.795.974.98 1.507a2.9 2.9 0 01.112 1.577c-.11.517-.375.985-.794 1.401a2.955 2.955 0 01-1.063.696 2.382 2.382 0 01-1.149.131 2.232 2.232 0 01-1.068-.452l.714-.709c.264.158.571.225.921.202.35-.019.682-.185.996-.497.278-.276.45-.591.516-.944a2.01 2.01 0 00-.117-1.092c-.144-.374-.39-.736-.738-1.087-.356-.359-.723-.615-1.1-.769a2.024 2.024 0 00-1.1-.139 1.765 1.765 0 00-.956.512 1.78 1.78 0 00-.409.598 1.477 1.477 0 00-.108.66c.015.225.085.444.209.657l-.714.709a2.327 2.327 0 01-.327-2.18c.132-.383.369-.745.712-1.085zM112.158 125.934l-.507-.685 2.724-2.021.508.685-2.725 2.021zm2.865-.173l-.808.599-3.717-5.01c-.169-.228-.329-.375-.48-.44a.64.64 0 00-.427-.033 1.3 1.3 0 00-.38.197 1.895 1.895 0 00-.209.176l-.116.129-.703-.604a2.18 2.18 0 01.531-.542 2.02 2.02 0 01.78-.351 1.66 1.66 0 01.874.047c.29.096.549.297.776.603l3.879 5.229zM91.193 128.66a.739.739 0 01.582.068.742.742 0 01.366.459.737.737 0 01-.068.582.74.74 0 01-.458.366.74.74 0 01-.582-.068.737.737 0 01-.366-.458.794.794 0 01.186-.745.729.729 0 01.34-.204z"
      ></motion.path>
    </svg>
  );
}

export default P;