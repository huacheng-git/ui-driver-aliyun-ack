/*!!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
import ClusterDriver from 'shared/mixins/cluster-driver';

// do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template
// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/


/*!!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const computed     = Ember.computed;
const observer     = Ember.observer;
const get          = Ember.get;
const set          = Ember.set;
const setProperties= Ember.setProperties;
const alias        = Ember.computed.alias;
const service      = Ember.inject.service;
const EmberPromise = Ember.RSVP.Promise;
const all          = Ember.RSVP.all;
const next         = Ember.run.next;
const equal        = Ember.computed.equal;

const defaultRadix = 10;
const defaultBase  = 1024;
/*!!!!!!!!!!!GLOBAL CONST END!!!!!!!!!!!*/

const ENDPOINT = 'ecs.aliyuncs.com';
const RESOURCE_GROUP_ENDPOINT = 'resourcemanager.aliyuncs.com';
const VPC_ENDPOINT = 'vpc.aliyuncs.com';
const PAGE_SIZE = 50;
const K8S_1_16_9 = '1.16.9-aliyun.1';
const K8S_1_14_8 = '1.14.8-aliyun.1';

const VERSIONS = [
  {
    value: K8S_1_16_9,
    label: K8S_1_16_9
  },
  {
    value: K8S_1_14_8,
    label: K8S_1_14_8
  }
];
const KUBERNETES = 'Kubernetes';
const MANAGED = 'ManagedKubernetes';

const MODES = [
  {
    value: 'iptables',
    label: 'iptables',
  },
  {
    value: 'ipvs',
    label: 'IPVS',
  }
];

const DISKS = [
  {
    label: 'clusterNew.aliyunkcs.disk.cloud',
    value: 'cloud'
  },
  {
    label: 'clusterNew.aliyunkcs.disk.ephemeralSsd',
    value: 'ephemeral_ssd'
  },
  {
    label: 'clusterNew.aliyunkcs.disk.ssd',
    value: 'cloud_ssd'
  },
  {
    label: 'clusterNew.aliyunkcs.disk.efficiency',
    value: 'cloud_efficiency'
  },
  {
    label: 'clusterNew.aliyunkcs.disk.essd',
    value: 'cloud_essd'
  }
];

const CLUSTER_TYPES = [
  {
    label: 'clusterNew.aliyunkcs.clusters.k8s',
    value: KUBERNETES
  },
  {
    label: 'clusterNew.aliyunkcs.clusters.managed',
    value: MANAGED
  }
];

const REGIONS = [
  {
    label:   'cn-beijing',
    value:   'cn-beijing',
    managed: true,
  }, {
    label: 'cn-zhangjiakou',
    value: 'cn-zhangjiakou'
  }, {
    label: 'cn-huhehaote',
    value: 'cn-huhehaote'
  }, {
    label:   'cn-hangzhou',
    value:   'cn-hangzhou',
    managed: true,
  }, {
    label:   'cn-shanghai',
    value:   'cn-shanghai',
    managed: true,
  }, {
    label: 'cn-shenzhen',
    value: 'cn-shenzhen'
  }, {
    label: 'cn-chengdu',
    value: 'cn-chengdu'
  }, {
    label: 'cn-hongkong',
    value: 'cn-hongkong'
  }, {
    label: 'ap-northeast-1',
    value: 'ap-northeast-1'
  }, {
    label:   'ap-south-1',
    value:   'ap-south-1',
    managed: true,
  }, {
    label:   'ap-southeast-1',
    value:   'ap-southeast-1',
    managed: true,
  }, {
    label: 'ap-southeast-2',
    value: 'ap-southeast-2'
  }, {
    label:   'ap-southeast-3',
    value:   'ap-southeast-3',
    managed: true,
  }, {
    label:   'ap-southeast-5',
    value:   'ap-southeast-5',
    managed: true,
  }, {
    label: 'us-east-1',
    value: 'us-east-1'
  }, {
    label: 'us-west-1',
    value: 'us-west-1'
  }, {
    label:   'me-east-1',
    value:   'me-east-1',
    managed: false
  }, {
    label: 'eu-west-1',
    value: 'eu-west-1'
  }, {
    label: 'eu-central-1',
    value: 'eu-central-1'
  }];

const NODECIDRMASKS = [
  {
    label: 16,
    value: '28'
  },
  {
    label: 32,
    value: '27'
  },
  {
    label: 64,
    value: '26'
  },
  {
    label: 128,
    value: '25'
  },
  {
    label: 256,
    value: '24'
  }
];

const CHARGETYPES = [
  {
    label: 'clusterNew.aliyunkcs.masterInstanceChargeType.postPaid',
    value: 'PostPaid'
  },
  {
    label: 'clusterNew.aliyunkcs.masterInstanceChargeType.prePaid',
    value: 'PrePaid'
  }
];
const PERIODUNIT = 'Month';
const PERIODS = [
  {
    label: '1',
    value: '1'
  },
  {
    label: '2',
    value: '2'
  },
  {
    label: '3',
    value: '3'
  },
  {
    label: '6',
    value: '6'
  },
  {
    label: '12',
    value: '12'
  },
];

const PLATFORMTYPES = [
  {
    label: 'CentOS 7.7',
    value: 'CentOS',
    osType: 'Linux'
  },
  {
    label: 'AliyunLinux',
    value: 'AliyunLinux',
    osType: 'Linux'
  },
  {
    label: 'Windows Server 2019',
    value: 'Windows',
    osType: 'Windows',
    managed: true
  },
  {
    label: 'Windows Server Core, version 1909',
    value: 'WindowsCore',
    osType: 'Windows',
    managed: true
  }
];

const languages = {
  'en-us':   {"clusterNew":{"aliyunkcs":{"label":"Aliyun Kubernetes Container Service","shortLabel":"Alibaba ACK","access":{"next":"Next: Configure Cluster","loading":"Loading Zones from Alibaba ACK","title":"Account Access","detail":"Choose the region and API Key that will be used to launch Alibaba Kubernetes Service"},"cluster":{"title":"Cluster Configuration","detail":"Choose the Zone and Kubernetes version that will be used to launch Alibaba Kubernetes Service","next":"Next: Configure Master Nodes","loading":"Loading Availability Zones from Alibaba","name":{"required":"Cluster name is required"}},"clusters":{"k8s":"Dedicated Kubernetes","managed":"Managed Kubernetes","label":"Cluster Type"},"master":{"title":"Master Nodes","detail":"Configure the master nodes that will be used to launch Alibaba Kubernetes Service","next":"Next: Configure Worker Nodes","loading":"Loading Key Pairs from Alibaba"},"worker":{"title":"Worker Nodes","detail":"Configure the worker nodes that will be used to launch Alibaba Kubernetes Service"},"disk":{"cloud":"Ordinary Disk","ephemeralSsd":"Local SSD Disk","efficiency":"Ultra Disk","ssd":"SSD Disk","essd":"ESSD Disk"},"rootSize":{"label":"Root Disk Size","placeholder":"e.g. 120"},"rootType":{"label":"Root Disk Type"},"storageType":{"label":"Data Disk Type"},"storageSize":{"label":"Data Disk Size","placeholder":"e.g. 120"},"masterNum":{"label":"Master Nodes Count","help":"The count of master nodes will be launched in this Kubernetes cluster"},"numOfNodes":{"label":"Worker Nodes Count","placeholder":"e.g. 3","required":"Worker Nodes Count is required","help":"The count of worker nodes will be launched in this Kubernetes cluster"},"keyPair":{"label":"Key Pair","required":"Key Pair is required"},"resourceGroup":{"label":"Resource Group","all":"Account's all Resources"},"region":{"label":"Region"},"vpcId":{"label":"VPC","prompt":"Choose VPC...","required":"VPC is required","default":"Default VPC"},"vswitchId":{"label":"VSwitch","prompt":"Choose VSwitch...","required":"VSwitch is required","default":"Default VSwitch"},"proxyMode":{"label":"Kube-Proxy Mode"},"containerCidr":{"label":"Pod CIDR Block","required":"Pod CIDR Block is required","invalid":"Pod CIDR Block is invalid","placeholder":"Specify a valid CIDR block that contains only internal IP addresses, namely one of the following CIDR blocks or their subnets: 10.0.0.0/8 172.16-31.0.0/12-16 and 192.168.0.0/16.Cannot be duplicated with the VPC and the network segment used by the existing kubernetes cluster in the VPC"},"serviceCidr":{"label":"Service CIDR","required":"Service CIDR is required","invalid":"Service CIDR is invalid","placeholder":"Valid CIDR blocks include: 10.0.0.0/8 172.16-31.0.0/12-16 and 192.168.0.0/16.Cannot be duplicated with the VPC and the network segment used by the existing kubernetes cluster in the VPC"},"nodeCidrMask":{"label":"IP Addresses per Node"},"snatEntry":{"label":"Configure SNAT","placeholder":"Configure SNAT for VPC"},"endpointPublicAccess":{"label":"Public Access","placeholder":"Expose API Server with EIP"},"masterInstanceChargeType":{"label":"Billing Method","prePaid":"Subscription","postPaid":"Pay-As-You-Go"},"masterPeriod":{"label":"Duration","placeholder":"Unit(Month)"},"masterAutoRenew":{"label":"Auto Renewal","placeholder":"Enable"},"masterAutoRenewPeriod":{"label":"Auto Renewal Duration","placeholder":"Unit(Month)"},"platform":{"label":"Operating System"},"accessKeyId":{"label":"Access Key","placeholder":"Your Aliyun access key","required":"Access Key is required"},"accessKeySecret":{"label":"Secret Key","placeholder":"Your Aliyun secret key","provided":"Provided","required":"Secret Key is required"},"version":{"label":"Kubernetes Version"},"zoneId":{"label":"Availability Zone","required":"Availability Zone is required"},"instanceType":{"label":"Instance Type","required":"Instance Type is required"}}}},
  'zh-hans': {"clusterNew":{"aliyunkcs":{"label":"阿里云Kubernetes容器服务","shortLabel":"Alibaba ACK","access":{"next":"下一步: 配置集群","loading":"从Alibaba ACK加载可用区域","title":"帐户访问","detail":"选择将用于启动阿里巴巴Kubernetes服务的地区和API密钥"},"cluster":{"title":"集群配置","detail":"选择将用于启动阿里巴巴Kubernetes服务的区域和Kubernetes版本","next":"下一步: 配置Master节点","loading":"从Alibaba加载可用区域","name":{"required":"集群名称必须输入"}},"clusters":{"k8s":"专有Kubernetes","managed":"托管Kubernetes","label":"集群类型"},"master":{"title":"Master 节点","detail":"配置用于启动阿里巴巴Kubernetes服务的主节点","next":"下一步: 配置Worker节点","loading":"从阿里巴巴加载密钥对"},"worker":{"title":"Worker 节点","detail":"配置用于启动阿里巴巴Kubernetes服务的工作节点"},"disk":{"cloud":"普通云盘","ephemeralSsd":"本地SSD盘","efficiency":"高效云盘","ssd":"SSD 云盘","essd":"ESSD 云盘"},"rootSize":{"label":"根磁盘大小","placeholder":"例如: 120"},"rootType":{"label":"根磁盘类型"},"storageType":{"label":"数据磁盘类型"},"storageSize":{"label":"数据磁盘大小","placeholder":"例如: 120"},"masterNum":{"label":"Master 节点数","help":"此Kubernetes集群将运行的Master节点数"},"numOfNodes":{"label":"Worker 节点数","placeholder":"例如: 3","required":"必须设置Worker节点","help":"此Kubernetes集群将运行的Worker节点数"},"keyPair":{"label":"密钥对","required":"必须选择密钥对"},"resourceGroup":{"label":"资源组","all":"账号全部资源"},"region":{"label":"区域"},"vpcId":{"label":"专有网络","prompt":"选择专有网络...","required":"必须选择专有网络","default":"默认专有网络"},"vswitchId":{"label":"交换机","prompt":"选择交换机...","required":"必须选择交换机","default":"默认交换机"},"proxyMode":{"label":"kube-proxy 代理模式"},"containerCidr":{"label":"Pod 网络 CIDR","required":"必须输入Pod 网络 CIDR","invalid":"Pod 网络 CIDR 网段格式不合法","placeholder":"请填写有效的私有网段，即以下网段及其子网：10.0.0.0/8，172.16-31.0.0/12-16，192.168.0.0/16。不能与VPC及VPC内已有kubernetes集群使用的网段重复"},"serviceCidr":{"label":"Service CIDR","required":"必须输入Service CIDR","invalid":"Service CIDR 网段不可选","placeholder":"可选范围：10.0.0.0/16-24，172.16-31.0.0/16-24，192.168.0.0/16-24。不能与VPC及VPC内已有kubernetes集群使用的网段重复"},"nodeCidrMask":{"label":"节点 IP 数量"},"snatEntry":{"label":"配置 SNAT","placeholder":"为专有网络配置 SNAT"},"endpointPublicAccess":{"label":"公网访问","placeholder":"使用 EIP 暴露 API Server"},"masterInstanceChargeType":{"label":"付费类型","prePaid":"包年包月","postPaid":"按量付费"},"masterPeriod":{"label":"购买时长","placeholder":"单位(月)"},"masterAutoRenew":{"label":"自动续费","placeholder":"开启"},"masterAutoRenewPeriod":{"label":"自动续费时长","placeholder":"单位(月)"},"platform":{"label":"操作系统"},"accessKeyId":{"label":"访问秘钥","placeholder":"请输入你的访问秘钥","required":"访问秘钥必须输入"},"accessKeySecret":{"label":"访问秘钥令牌","placeholder":"请输入你的访问秘钥令牌","provided":"Provided","required":"访问秘钥令牌必须输入"},"version":{"label":"Kubernetes版本"},"zoneId":{"label":"可用区域","required":"可用区域必须设置"},"instanceType":{"label":"实例类型","required":"实例类型必须设置"}}}}
};


/*!!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
export default Ember.Component.extend(ClusterDriver, {
  driverName:  '%%DRIVERNAME%%',
  configField: '%%DRIVERNAME%%EngineConfig',
  app:         service(),
  router:      service(),
  session:     service(),
  intl:        service(),

  layout:            null,
  configField:       'aliyunEngineConfig',

  step:                  1,
  versionChoices:        VERSIONS,
  managedVersionChoices: VERSIONS,
  nodeCidrMaskChoices:   NODECIDRMASKS,

  workerPeriodUnit:                PERIODUNIT,
  masterPeriodChoices:             PERIODS,
  masterAutoRenewPeriodChoices:    PERIODS,

  zoneChoices:           [],
  systemDiskChoices:     [],
  dataDiskChoices:       [],
  proxyModeChoices:      MODES,
  resourceGroups:        null,
  storageDiskChoices:    null,
  sgChoices:             null,
  keyChoices:            null,
  allSubnets:            null,
  allInstances:          null,

  workerInstanceType:    '',
  masterInstanceType:    '',
  vswitchId:             '',

  editing:               equal('mode', 'edit'),
  isNew:                 equal('mode', 'new'),

  config: null,
  // config:      alias('cluster.%%DRIVERNAME%%kcsEngineConfig'),

  init() {
    // This does on the fly template compiling, if you mess with this :cry:
    const decodedLayout = window.atob(LAYOUT);
    const template      = Ember.HTMLBars.compile(decodedLayout, {
      moduleName: 'shared/components/cluster-driver/driver-%%DRIVERNAME%%/template'
    });
    set(this,'layout', template);
    this._super(...arguments);

    const lang = get(this, 'session.language');

    get(this, 'intl.locale');
    this.loadLanguage(lang);
    let config      = get(this, 'config');
    let configField = get(this, 'configField');

    if ( !config ) {
      config = this.get('globalStore').createRecord({
        type:                     configField,
        accessKeyId:              null,
        accessKeySecret:          null,
        addons:                   [{ name: 'flannel' }],
        clusterType:              KUBERNETES,
        containerCidr:            '172.20.0.0/16',
        kubernetesVersion:        K8S_1_16_9,
        proxyMode:                'ipvs',
        name:                     null,
        displayName:              null,
        regionId:                 'cn-beijing',
        zoneId:                   null,
        serviceCidr:              '172.21.0.0/20',
        nodeCidrMask:             '26',
        snatEntry:                true,
        endpointPublicAccess:     false,
        masterInstanceChargeType: 'PostPaid',
        masterPeriod:             '1',
        masterAutoRenew:          true,
        masterAutoRenewPeriod:    '1',
        masterSystemDiskSize:     120,
        masterSystemDiskCategory: 'cloud_efficiency',
        workerSystemDiskSize:     120,
        osType:                   'Linux',
        platform:                 'CentOS',
        resourceGroupId:          '',
        workerSystemDiskCategory: 'cloud_efficiency',
        workerDataDiskSize:       120,
        workerDataDiskCategory:   'cloud_efficiency',
        numOfNodes:               3,
        workerDataDisk:           true,
        keyPair:                  null,
      });

      set(this, 'cluster.%%DRIVERNAME%%EngineConfig', config);
      set(this, 'config', config);
    } else {
      set(this, 'vswitchId', get(this, 'config.masterVswitchIds')[0]);
    }
  },
  /*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/
  // Add custom validation beyond what can be done from the config API schema
  validate() {
    // Get generic API validation errors
    this._super();
    const intl = get(this, 'intl');
    var errors = get(this, 'errors')||[];
    if ( !get(this, 'cluster.name') ) {
      errors.push(intl.t('clusterNew.aliyunkcs.cluster.name.required'));
    }

    // Add more specific errors

    // Set the array of errors for display,
    // and return true if saving should continue.
    if ( get(errors, 'length') ) {
      set(this, 'errors', errors);
      return false;
    } else {
      set(this, 'errors', null);
      return true;
    }
  },

  actions: {
    async aliyunLogin(cb) {
      setProperties(this, {
        'errors':                 null,
        'config.accessKeyId':     (get(this, 'config.accessKeyId') || '').trim(),
        'config.accessKeySecret':   (get(this, 'config.accessKeySecret') || '').trim(),
      });

      const errors = [];
      const intl = get(this, 'intl');

      const accessKeyId = get(this, 'config.accessKeyId');
      const accessKeySecret = get(this, 'config.accessKeySecret');

      if ( !accessKeyId ) {
        errors.push(intl.t('clusterNew.aliyunkcs.accessKeyId.required'));
      }

      if ( !accessKeySecret ) {
        errors.push(intl.t('clusterNew.aliyunkcs.accessKeySecret.required'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      try {
        await all([this.fetchResourceGroups(), this.fetchRegions()]);
        set(this, 'step', 2);
        cb(true);
        this.regionDidChange();
      } catch (e) {
        errors.push(get(e, 'body.Message') || e);
        set(this, 'errors', errors);
        cb();

        return;
      }
    },

    configMaster(cb) {
      set(this, 'errors', null);
      const errors = [];
      const intl = get(this, 'intl');

      const vpcId = get(this, 'config.vpcId');
      const vswitchId = get(this, 'vswitchId');
      const containerCidr = get(this, 'config.containerCidr');
      const serviceCidr = get(this, 'config.serviceCidr');

      if ( !vpcId ) {
        errors.push(intl.t('clusterNew.aliyunkcs.vpcId.required'));
      }

      if ( !vswitchId ) {
        errors.push(intl.t('clusterNew.aliyunkcs.vswitchId.required'));
      }

      if ( !containerCidr ) {
        errors.push(intl.t('clusterNew.aliyunkcs.containerCidr.required'));
      }

      if ( !serviceCidr ) {
        errors.push(intl.t('clusterNew.aliyunkcs.serviceCidr.required'));
      }

      if ( !this.validatePodCIDR() ) {
        errors.push(intl.t('clusterNew.aliyunkcs.containerCidr.invalid'));
      }

      if ( !this.validateServiceCIDR() ) {
        errors.push(intl.t('clusterNew.aliyunkcs.serviceCidr.invalid'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }
      this.setInstances('master').then(() => {
        set(this, 'step', 3);
        cb(true);
      });
    },

    configWorker(cb) {
      set(this, 'errors', null);
      const errors = [];
      const intl = get(this, 'intl');

      const masterInstanceType = get(this, 'masterInstanceType');

      if ( !masterInstanceType && get(this, 'config.clusterType') === KUBERNETES ) {
        errors.push(intl.t('clusterNew.aliyunkcs.instanceType.required'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      all([
        this.setInstances(),
        this.setKeyPairs()
      ]).then(() => {
        set(this, 'step', 4);
        cb(true);
      }).catch(() => {
        cb();
        return;
      });
    },

    save(cb) {
      setProperties(this, { 'errors': null });

      const errors = get(this, 'errors') || [];
      const intl = get(this, 'intl');

      const keyPair = get(this, 'config.keyPair');

      const workerInstanceType = get(this, 'workerInstanceType');

      const clusterName = get(this, 'cluster.name');

      if( !clusterName ) {
        errors.push(intl.t('clusterNew.aliyunkcs.cluster.name.required'));
      }

      if ( !workerInstanceType ) {
        errors.push(intl.t('clusterNew.aliyunkcs.instanceType.required'));
      }

      if ( !keyPair ) {
        errors.push(intl.t('clusterNew.aliyunkcs.keyPair.required'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      set(this, 'cluster.%%DRIVERNAME%%EngineConfig', get(this, 'config'));

      this.send('driverSave', cb);
    },

    cancel(){
      // probably should not remove this as its what every other driver uses to get back
      get(this, 'router').transitionTo('global-admin.clusters.index');
    },
  },

  languageDidChanged: observer('intl.locale', function() {
    const lang = get(this, 'intl.locale');
    if (lang) {
      this.loadLanguage(lang[0]);
    }

  }),

  resourceGroupChoicesShouldChange: observer('intl.locale', 'resourceGroups', function() {
    const intl    = get(this, 'intl');
    let choices = get(this, 'resourceGroups').concat();

    next(() => {
      choices = choices.filter((item) => item.raw.Status === 'OK');

      choices.unshift({
        label: intl.t('clusterNew.aliyunkcs.resourceGroup.all'),
        value: ''
      });

      set(this, 'resourceGroupChoices', choices);
    });
  }),

  resourceGroupIdDidChange: observer('config.resourceGroupId', function() {
    this.regionDidChange();
  }),

  regionChoicesShouldChange: observer('intl.locale', async function() {
    await this.fetchRegions();
  }),

  regionDidChange: observer('config.regionId', function() {
    const intl = get(this, 'intl');
    const region = get(this, 'config.regionId');
    const resourceGroupId = get(this, 'config.resourceGroupId');
    const externalParams = {
      RegionId: get(this, 'config.regionId'),
    };

    if (!!resourceGroupId && resourceGroupId !== '') {
      externalParams.ResourceGroupId = resourceGroupId;
    }

    if (region) {
      this.fetch('Vpc', 'Vpcs', externalParams).then((vpcs) => {
        set(this, 'vpcs', vpcs.map((vpc) => {
          let label = `${ vpc.raw.VpcName } (${ vpc.value })`;

          if (vpc.raw.IsDefault) {
            label = `${ intl.t('clusterNew.aliyunkcs.vpcId.default') } (${ vpc.value })`;
          }

          return {
            ...vpc,
            label
          };
        }));

        const selectedVPC = get(this, 'config.vpcId');

        if (selectedVPC) {
          const found = vpcs.findBy('value', selectedVPC);

          if (!found) {
            set(this, 'config.vpcId', null);
          } else {
            this.vpcDidChange();
          }
        }
      });
      this.fetch('Zone', 'Zones', { RegionId: get(this, 'config.regionId') }).then((zones) => {
        set(this, 'zoneChoices', zones);

        if (get(this, 'config.zoneId')) {
          const found = zones.findBy('value', get(this, 'config.zoneId'));

          if (!found) {
            set(this, 'config.zoneId', null);
          }
        }
      });
    }
  }),

  vpcDidChange: observer('config.vpcId', function() {
    const intl = get(this, 'intl');
    const vpcId = get(this, 'config.vpcId');
    const resourceGroupId = get(this, 'config.resourceGroupId');
    const externalParams = {
      RegionId: get(this, 'config.regionId'),
      vpcId:    get(this, 'config.vpcId'),
    };

    if (!!resourceGroupId && resourceGroupId !== '') {
      externalParams.ResourceGroupId = resourceGroupId;
    }

    if (vpcId) {
      this.fetch('VSwitch', 'VSwitches', externalParams).then((vswitches) => {
        set(this, 'vswitches', vswitches.map((vswitch) => {
          let label = `${ vswitch.raw.VSwitchName } (${ vswitch.value })`;

          if (vswitch.raw.IsDefault) {
            label = `${ intl.t('clusterNew.aliyunkcs.vswitchId.default') } (${ vswitch.value })`;
          }

          return {
            ...vswitch,
            label
          };
        }));

        const selectedVSwitch = get(this, 'vswitchId');

        if (selectedVSwitch) {
          const found = vswitches.findBy('value', selectedVSwitch);

          if (!found) {
            set(this, 'vswitchId', null);
          }
        }
      });
    } else {
      set(this, 'vswitchId', null);
      set(this, 'vswitches', []);
    }
  }),

  vpcsShouldChange: observer('intl.locale', function() {
    const intl = get(this, 'intl');
    let vpcs = get(this, 'vpcs');

    if (vpcs === undefined) {
      return;
    }

    next(() => {
      vpcs = vpcs.map(vpc => {
        if (vpc.raw.IsDefault) {
          return {
            ...vpc,
            label: `${ intl.t('clusterNew.aliyunkcs.vpcId.default') } (${ vpc.value })`
          };
        } else {
          return vpc;
        }
      });

      set(this, 'vpcs', vpcs);
    });
  }),

  vswitchDidChange: observer('vswitches.[]', 'vswitchId', function() {
    const selectedVSwitch = get(this, 'vswitchId');

    if (selectedVSwitch) {
      const found = get(this, 'vswitches').findBy('value', selectedVSwitch);

      if (!found) {
        set(this, 'config.zoneId', null);
        set(this, 'config.masterVswitchIds', null);
        set(this, 'config.workerVswitchIds', null);
      } else {
        set(this, 'config.zoneId', found.raw.ZoneId);
        set(this, 'config.masterVswitchIds', [selectedVSwitch, selectedVSwitch, selectedVSwitch]);
        set(this, 'config.workerVswitchIds', [selectedVSwitch]);
      }
    } else {
      set(this, 'config.zoneId', null);
      set(this, 'config.masterVswitchIds', null);
      set(this, 'config.workerVswitchIds', null);
    }
  }),

  vswitchesShouldChange: observer('intl.locale', function() {
    const intl = get(this, 'intl');
    let vswitches = get(this, 'vswitches');

    if (vswitches === undefined) {
      return;
    }

    next(() => {
      vswitches = vswitches.map(vswitch => {
        if (vswitch.raw.IsDefault) {
          return {
            ...vswitch,
            label: `${ intl.t('clusterNew.aliyunkcs.vswitchId.default') } (${ vswitch.value })`
          };
        } else {
          return vswitch;
        }
      });
      set(this, 'vswitches', vswitches);
    });
  }),

  clusterNameDidChange: observer('cluster.name', function() {
    const clusterName = get(this, 'cluster.name');
    set(this, 'config.name', clusterName);
    set(this, 'config.displayName', clusterName);
  }),

  clusterTypeDidChange: observer('config.clusterType', function() {
    if ( get(this, 'config.clusterType') === KUBERNETES  ) {
      set(this, 'config.kubernetesVersion', get(VERSIONS, 'firstObject.value'));
    } else {
      set(this, 'config.kubernetesVersion', get(VERSIONS, 'firstObject.value'));
    }
  }),

  instanceChargeTypeDidChange: observer('config.masterInstanceChargeType', function() {
    this.setInstances('master');
  }),

  platformTypeDidChange: observer('config.platform', function() {
    const osType = get(this, 'platformChoices').find((item) => item.value === get(this, 'config.platform'));

    set(this, 'config.osType', osType);
  }),

  masterInstanceTypeDidChange: observer('masterInstanceType', function() {
    const type = get(this, 'masterInstanceType');

    this.fetchAvailableSystemDisks('master');
    set(this, 'config.masterInstanceTypes', [type, type, type]);
  }),

  workerInstanceTypeDidChange: observer('workerInstanceType', function() {
    const type = get(this, 'workerInstanceType');

    this.fetchAvailableSystemDisks('worker');
    this.fetchAvailabelDataDisks();
    set(this, 'config.workerInstanceTypes', [type]);
  }),

  workerSystemDiskDidChange: observer('config.workerSystemDiskCategory', function() {
    this.fetchAvailabelDataDisks();
  }),

  workerDataDiskSizeDidChange: observer('config.workerDataDiskSize', function() {
    const size = get(this, 'config.workerDataDiskSize');

    if (size === '' || size === undefined) {
      set(this, 'config.workerDataDisk', false);
    }

    set(this, 'config.workerDataDisk', parseInt(size) > 0);
  }),

  minNumOfNodes: computed('config.clusterType', function() {
    return get(this, 'config.clusterType') === KUBERNETES ? 0 : 2;
  }),

  selectedZone: computed('config.zoneId', 'zoneChoices', function() {
    const zoneChoices = get(this, 'zoneChoices') || [];

    return zoneChoices.findBy('value', get(this, 'config.zoneId'));
  }),

  clusterTypeChoices: computed('config.regionId', 'zoneChoices', function() {
    const region = REGIONS.findBy('value', get(this, 'config.regionId'));

    if ( region && get(region, 'managed') !== false ) {
      return CLUSTER_TYPES;
    } else {
      return CLUSTER_TYPES.filter((type) => get(type, 'value') !== MANAGED);
    }
  }),

  masterInstanceChargeTypeChoices: computed('intl.locale', function() {
    const intl = get(this, 'intl');

    return CHARGETYPES.map((item) => ({
      ...item,
      label: intl.t(item.label),
    }));
  }),

  platformChoices: computed('intl.locale', 'config.clusterType', function() {
    if (get(this, 'config.clusterType') === KUBERNETES) {
      return PLATFORMTYPES.filter(item => get(item, 'managed') !== true);
    } else {
      return PLATFORMTYPES;
    }
  }),

  nodeCidrMaskShowValue: computed('intl.locale', 'config.nodeCidrMask', function() {
    const mask = parseInt(get(this, 'config.nodeCidrMask'));

    if (isNaN(mask)) {
      return 0;
    }

    return Math.pow(2, (32 - mask));
  }),

  vpcShowValue: computed('intl.locale', 'config.vpcId', 'vpcs', function() {
    const vpcs = get(this, 'vpcs');

    if (vpcs && get(this, 'config.vpcId')) {
      return get(vpcs.findBy('value', get(this, 'config.vpcId')), 'label');
    } else {
      return '';
    }
  }),

  vswitchShowValue: computed('intl.locale', 'vswitchId', 'vswitches', function() {
    const vswitches = get(this, 'vswitches');

    if (vswitches && get(this, 'vswitchId')) {
      return get(vswitches.findBy('value', get(this, 'vswitchId')), 'label');
    } else {
      return '';
    }
  }),

  resourceGroupShowValue: computed('intl.locale', 'config.resourceGroupId', 'resourceGroupChoices.[]', function() {
    const resourceGroupChoices = get(this, 'resourceGroupChoices');

    if (resourceGroupChoices && get(this, 'config.resourceGroupId') !== null) {
      return get(resourceGroupChoices.findBy('value', get(this, 'config.resourceGroupId')), 'label');
    } else {
      return '';
    }
  }),

  loadLanguage(lang) {
    const translation = languages[lang] || languages['en-us'];
    const intl = get(this, 'intl');

    if (intl.addTranslation) {
      intl.addTranslation(lang, 'clusterNew.aliyunkcs', translation.clusterNew.aliyunkcs);
    } else {
      intl.addTranslations(lang, translation);
    }

    intl.translationsFor(lang);
    set(this, 'refresh', false);
    next(() => {
      set(this, 'refresh', true);
      set(this, 'lanChanged', +new Date());
    });
  },

  setInstances(type) {
    const externalParams = {
      RegionId: get(this, 'config.regionId'),
    };
    const prefix = type === 'master' ? 'master' : 'worker';

    if (type === 'master') {
      set(externalParams, 'InstanceChargeType', get(this, 'config.masterInstanceChargeType'));
    }

    return new EmberPromise((resolve, reject) => {
      this.fetch('InstanceType', 'InstanceTypes', externalParams)
        .then((instanceTypes) => {
          this.fetchAvailableInstances().then((availableResources) => {
            set(this, 'instanceChoices', instanceTypes.filter((instanceType) => availableResources.indexOf(instanceType.value) > -1).map((instanceType) => {
              return {
                group: instanceType.raw.InstanceTypeFamily,
                value: instanceType.value,
                label: `${ instanceType.raw.InstanceTypeId } ( ${ instanceType.raw.CpuCoreCount } ${ instanceType.raw.CpuCoreCount > 1 ? 'Cores' : 'Core' } ${ instanceType.raw.MemorySize }GB RAM )`,
              };
            }));

            let instanceType;

            if ( (get(this, 'instanceChoices').findBy('value', get(this, `${ prefix }InstanceType`))) ) {
              instanceType = get(this, `${ prefix }InstanceType`);
            } else {
              instanceType = get(this, 'instanceChoices.firstObject.value');
            }

            set(this, `${ prefix }InstanceType`, instanceType);
            this.fetchAvailableSystemDisks(type).then(() => {
              resolve();
            });
          });
        })
        .catch((err) => {
          const errors = get(this, 'errors') || [];

          errors.pushObject(err.message || err);
          set(this, 'errors', errors);
          reject();
          return;
        });
    });
  },

  setKeyPairs() {
    const resourceGroupId = get(this, 'config.resourceGroupId');
    const externalParams = {
      RegionId: get(this, 'config.regionId'),
    };

    if (!!resourceGroupId && resourceGroupId !== '') {
      externalParams.ResourceGroupId = resourceGroupId;
    }

    this.fetch('KeyPair', 'KeyPairs', externalParams).then((keyChoices) => {
      set(this, 'keyChoices', keyChoices.map((item) => {
        return {
          label: item.raw.KeyPairName,
          value: item.raw.KeyPairName
        };
      }));
      if ( !get(this, 'config.keyPair') && get(this, 'keyChoices.length') ) {
        set(this, 'config.keyPair', get(this, 'keyChoices.firstObject.value'));
      }
    }).catch((err) => {
      const errors = get(this, 'errors') || [];

      errors.pushObject(err.message || err);
      set(this, 'errors', errors);
    });
  },

  async fetchResourceGroups() {
    const groups = await this.fetch('ResourceGroup', 'ResourceGroups');
    set(this, 'resourceGroups', groups.map((group) => {
      return {
        label: `${ group.raw.DisplayName } (${ group.raw.Id })`,
        value: group.raw.Id,
        raw: group.raw
      };
    }));
  },

  async fetchRegions() {
    let AcceptLanguage = 'zh-CN';

    if (get(this, 'intl.locale')[0] === 'en-us') {
      AcceptLanguage = 'en-US';
    };

    const regions = await this.fetch('Region', 'Regions', { AcceptLanguage });
    const transformRegions = [];

    REGIONS.forEach((regionTemp) => {
      const found = regions.findBy('value', get(regionTemp, 'value'));

      if (found) {
        transformRegions.pushObject({
          ...regionTemp,
          label: found.raw.LocalName
        });
      } else {
        transformRegions.pushObject(regionTemp);
      }

      set(this, 'regionChoices', transformRegions);
    });
  },

  fetchAvailableInstances() {
    let results = [];

    return new EmberPromise((resolve, reject) => {
      this.fetch('', 'AvailableResource', {
        RegionId:             get(this, 'config.regionId'),
        ZoneId:               get(this, 'config.zoneId'),
        InstanceChargeType:   get(this, 'config.masterInstanceChargeType'),
        NetworkCategory:      'vpc',
        DestinationResource: 'InstanceType'
      }).then((res) => {
        results = this.getAvailableResources(res);
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  fetchAvailableSystemDisks(type) {
    let results = [];
    const prefix = type === 'master' ? 'master' : 'worker';

    return new EmberPromise((resolve, reject) => {
      this.fetch('', 'AvailableResource', {
        RegionId:             get(this, 'config.regionId'),
        ZoneId:               get(this, 'config.zoneId'),
        InstanceType:         get(this, `${ prefix }InstanceType`),
        InstanceChargeType:   get(this, 'config.masterInstanceChargeType'),
        NetworkCategory:      'vpc',
        IoOptimized:          'optimized',
        DestinationResource:  'SystemDisk'
      }).then((res) => {
        const selectedDisk = get(this, `config.${ prefix }SystemDiskCategory`);

        results = this.getAvailableResources(res);
        set(this, 'systemDiskChoices', results.map((item) => {
          let disk = DISKS.find(disk => disk.value === item);

          return {
            value: item,
            label: disk.label
          };
        }));

        if (selectedDisk) {
          const found = get(this, 'systemDiskChoices').findBy('value', selectedDisk);

          if (!found) {
            set(this, `config.${ prefix }SystemDiskCategory`, null);
          }
        }
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  fetchAvailabelDataDisks() {
    let results = [];

    return new EmberPromise((resolve, reject) => {
      this.fetch('', 'AvailableResource', {
        RegionId:             get(this, 'config.regionId'),
        ZoneId:               get(this, 'config.zoneId'),
        InstanceType:         get(this, `workerInstanceType`),
        InstanceChargeType:   get(this, 'config.masterInstanceChargeType'),
        NetworkCategory:      'vpc',
        SystemDiskCategory:   get(this, 'config.workerSystemDiskCategory'),
        IoOptimized:          'optimized',
        DestinationResource:  'DataDisk'
      }).then((res) => {
        const selectedDisk = get(this, 'config.workerDataDiskCategory');

        results = this.getAvailableResources(res);
        set(this, 'dataDiskChoices', results.map((item) => {
          let disk = DISKS.find(disk => disk.value === item);
          if (disk === undefined) {
            return null;
          }
          return {
            value: item,
            label: disk.label
          };
        }));

        if (selectedDisk) {
          const found = get(this, 'dataDiskChoices').findBy('value', selectedDisk);

          if (!found) {
            set(this, 'config.workerDataDiskCategory', null);
          }
        }

        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  getAvailableResources(res) {
    const results = [];
    const zones = res['AvailableZones'];

    zones.AvailableZone.forEach((zone) => {
      zone['AvailableResources']['AvailableResource'].forEach((resource) => {
        resource['SupportedResources']['SupportedResource'].forEach((support) => {
          if ( support.Status === 'Available' && results.indexOf(support.Value) === -1 ) {
            results.pushObject(support.Value);
          }
        });
      });
    });

    return results;
  },

  validatePodCIDR() {
    const containerCidr = get(this, 'config.containerCidr');
    const segment = containerCidr.split('/')[0];
    const subnet  = containerCidr.split('/')[1];

    if (segment === '10.0.0.0') {
      return (parseInt(subnet) >= 7 && parseInt(subnet) <= 22);
    }

    if (segment === '192.168.0.0') {
      return (parseInt(subnet) >= 13 && parseInt(subnet) <= 22);
    }

    const segmentSplit = segment.split('.');

    if (segmentSplit[0] === '172') {
      if (!(parseInt(segmentSplit[1]) >= 16 && parseInt(segmentSplit[1]) <= 31)) {
        return false;
      }
      if (!(segmentSplit[2] === '0' && segmentSplit[3] === '0')) {
        return false;
      }
      if (segmentSplit[1] === '16' && (parseInt(subnet) >= 12 && parseInt(subnet) <= 22)) {
        return true;
      }
      if (parseInt(segmentSplit[1]) > 16 && (parseInt(subnet) >= 16 && parseInt(subnet) <= 22)) {
        return true;
      }
    }

    return false;
  },

  validateServiceCIDR() {
    const containerCidr = get(this, 'config.serviceCidr');
    const segment = containerCidr.split('/')[0];
    const subnet  = containerCidr.split('/')[1];

    if (segment === '10.0.0.0') {
      return (parseInt(subnet) >= 16 && parseInt(subnet) <= 24);
    }

    if (segment === '192.168.0.0') {
      return (parseInt(subnet) >= 16 && parseInt(subnet) <= 24);
    }

    const segmentSplit = segment.split('.');

    if (segmentSplit[0] === '172') {
      if (!(parseInt(segmentSplit[1]) >= 16 && parseInt(segmentSplit[1]) <= 31)) {
        return false;
      }
      if (parseInt(subnet) >= 16 && parseInt(subnet) <= 24) {
        return true;
      }
    }

    return false;
  },

  fetch(resource, plural, externalParams = {}, page = 1) {
    const results = [];
    const location = window.location;
    let endpoint = get(this, 'config.apiEndpoint') ? get(this, 'config.apiEndpoint') : ENDPOINT;
    const AccessKeyId = get(this, 'config.accessKeyId');
    const secretAccessKey = get(this, 'config.accessKeySecret');
    const date = new Date();
    let req = {};
    let params = Object.assign({}, externalParams, {
      AccessKeyId,
      Action:           `Describe${ plural }`,
      Format:           'JSON',
      SignatureMethod:  'HMAC-SHA1',
      SignatureNonce:   String(date.getTime()) + String(Math.random()).substring(2, 6),
      SignatureVersion: '1.0',
      Timestamp:        date.toISOString(),
      Version:          '2014-05-26',
    });

    params.PageSize = PAGE_SIZE;
    params.PageNumber = page;

    if (plural === 'ResourceGroups') {
      params.Action  = 'ListResourceGroups';
      params.Version = '2020-03-31';
      endpoint = RESOURCE_GROUP_ENDPOINT;
    }

    if(plural === 'Vpcs' || plural === 'VSwitches') {
      params.Version = '2016-04-28';
      endpoint = VPC_ENDPOINT;
    }

    params.Signature = this.getSignature(secretAccessKey, params);

    endpoint = `${ get(this, 'app.proxyEndpoint')  }/${  endpoint.replace('//', '/') }`;
    endpoint = `${ location.origin }${ endpoint }`;

    req = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      url:     endpoint,
      method:  'POST',
      body:    this.getQueryParamsString(params)
    };

    return new EmberPromise((resolve, reject) => {
      get(this, 'globalStore').rawRequest(req).then((res) => {
        if (resource === '') {
          return resolve(res.body);
        }

        const current = res.body[`${ plural }`][resource];

        results.pushObjects(current.map((item) => {
          return {
            label: item[`${ resource }Id`],
            value: item[`${ resource }Id`],
            raw:   item,
          };
        }));

        if (res.body.TotalCount > ((PAGE_SIZE * (page - 1)) + current.length)) {
          return this.fetch(resource, plural, externalParams, page + 1)
            .then((array) => {
              results.pushObjects(array);
              resolve(results);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve(results);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  },

  getSignature(secretAccessKey, params) {
    const CanonicalizedQueryString = this.getQueryParamsString(params, true);
    const StringToSign = `POST&%2F&${ CanonicalizedQueryString }`.replace(/%3A/g, '%253A');

    return AWS.util.crypto.hmac(`${ secretAccessKey }&`, StringToSign, 'base64', 'sha1');
  },

  getQueryParamsString(params, deep = false) {
    const keys = Object.keys(params).sort((a, b) => {
      return a < b ? -1 : 1;
    });

    return keys.map((key) => {
      if (params[key] === undefined) {
        return '';
      }

      return `${ key }${ deep ? encodeURIComponent('=') : '=' }${ encodeURIComponent(params[key]) }`;
    }).join(deep ? encodeURIComponent('&') : '&');
  },
  // Any computed properties or custom logic can go here
});
